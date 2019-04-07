import React, { Component } from 'react'
import Search from './Search'


////key: Jui4sG4vPxdG0tWeaG9Bsw
//secret: 0B8zeMDyF4KMhdS3R6QMSEe0LsuxoVbd6UhisfFUU
//APIgoogleBook AIzaSyD0pHEXFGy_F07De62dzb2w89Zz0Ime4zs
export default class ListBooks extends Component {

  state = {    
    searchInput: '',
    searchedBook: []
  }
  handleChange=(e) => {
   // e.preventDefault()
    this.setState({searchInput:e.target.value})
  }
  handleSubmit =(e)=>
{
  e.preventDefault()
  
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`).then(response => {
      response.json().then(data => {
        console.log(data);
        
      let copyStateSearch = { ...this.state }
      for(let i=0 ; i<data.items.length;i++){
      copyStateSearch.searchedBook.push({
        title:data.items[i].volumeInfo.title, 
        author:data.items[i].volumeInfo.authors,
       info:data.items[i].volumeInfo.infoLink,
        url:data.items[i].volumeInfo.imageLinks.thumbnail
        })
      }
        this.setState({searchedBook:this.state.searchedBook})
  

      })
    })
  } 
render() {
  
  let bookSearching = this.state.searchedBook.map((book,index) => {
     return <Search book={book} key={index} title={book.title} author={book.author} info={book.info} url={book.url}/>
  })
  return (
    <div>
<form onSubmit={this.handleSubmit} style={{"display": "inline-block"}} className="col-4">
          <input type="text" placeholder="search book by title" onChange={this.handleChange}/>
          <button className="btnSearch" type="submit">Search</button> 
      </form> 
    
      {bookSearching}
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