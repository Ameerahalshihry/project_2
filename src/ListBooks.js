import React, { Component } from 'react'
import Search from './Search'
var convert = require('xml-js')


////key: Jui4sG4vPxdG0tWeaG9Bsw
//secret: 0B8zeMDyF4KMhdS3R6QMSEe0LsuxoVbd6UhisfFUU

//APIgoogleBook AIzaSyD0pHEXFGy_F07De62dzb2w89Zz0Ime4zs
export default class ListBooks extends Component {

  state = {    
    searchInput: '',
    searchedBook: []
  }
  handleSearch=(e) => {
    e.preventDefault()
    this.setState({searchInput:e.target.value})
  }
searchBook =(e)=>
{
  e.preventDefault()
  
    fetch(`http://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`).then(response => {
      response.json().then(data => {
        console.log(data);
        
        // let copyStateSearch = { ...this.state }
        // for(let i=0 ; i<data.response.items.length;i++){
        //   copyStateSearch.searchedBook.push({ISBN:data.docs[1].isbn , title:data.docs[1].title })

        // }
        //console.log(data);
        this.setState({searchedBook:this.state.searchedBook})
       //console.log(this.state.searchedBook);
        //console.log(data.docs[1].title);
       //console.log(data.docs[""0""].author_name);

      })
    })
  } 
render() {
  let bookSearching = this.state.searchedBook.map((book,index) => {
     return <Search handleSearch={this.handleSearch} searchBook={this.searchBook}/>
  })
  return (
    <div>
      <Search handleSearch={this.handleSearch} searchBook={this.searchBook}/>

      {bookSearching}
{/* <Img bookCover={this.state.book1}/> */}
    </div>
  )
}
}











// https://www.goodreads.com/search.xml?key=Jui4sG4vPxdG0tWeaG9Bsw&q=frost
// //fetch(`http://openlibrary.org/search.json?q=${this.state.searchInput}`).then(response => {
// fetch(`https://cors-anywhere.herokuapp.com/www.goodreads.com/search.xml?q=${this.state.searchInput}&key=Jui4sG4vPxdG0tWeaG9Bsw`)
//   .then(response => {
//     let xmlText = response.text()
//     console.log(xmlText)
//     return xmlText  
//   })
//     .then(xmlText => {
//       let result = convert.xml2json(xmlText)
//       console.log(result);
//       return result 
//       })
//       .then(result => {
//         console.log(JSON.parse(result))
//       })