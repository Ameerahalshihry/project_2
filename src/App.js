import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ListBooks from './ListBooks'
import BookDetails from './BookDetails';
import ISBNs from './ISBNs'
import BookCard from './BookCard';
import Search from './Search';

class App extends Component {
  state = {
    faves: [],
    book1: '',
    booksCover: [],
    allBooks: [],
    current:{},
    active : false
  }
  componentDidMount() {
    var url = '';
    let AllISBNsBooks = ISBNs.map((bookISBN, index) => {
      url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + bookISBN + '&jscmd=data&format=json'
      fetch(url).then(response => {
        response.json().then(data => {
          let books = { ...this.state }
      
      books.allBooks.push({ISBN: bookISBN, data: data[`ISBN:${bookISBN}`]})

          return this.setState((prevState) => ({ allBooks: books.allBooks }))
        })
      })
    })
  }

  handleDetailsClick = (book) => {

   const url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + book + '&jscmd=data&format=json'
    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({current: data[`ISBN:${book}`]})
        this.setState({active: true})
        
      })
    })
  }


  render() {
    let bookCovers = this.state.allBooks.map((book,index) => {
      return <BookDetails book={book.data.cover.medium} key={index} onDetails={()=>{this.handleDetailsClick(book.ISBN)}} />
      

    })

let display;

if (this.state.active){
  display =  <BookCard current={this.state.current}/>

  
} else {
  display = bookCovers
          
}

    return (
      <div className="App">
        <header className="App-header">
        <h2>Books are a uniquely portable magic.</h2>
          <div><img src={require('./img14.png')} alt=""/></div>
        </header>
        <div>
<ListBooks />

</div>
        <div className="book-library">
          {display}
        </div>

        <footer>
          <div className="col-1" style={{"display": "inline-block"}}>
          <svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
</svg></div>      
<div className="col-1" style={{"display": "inline-block"}}>
<svg id="i-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
    <path stroke-width="0" fill="currentColor" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
</svg></div>
<div className="col-1" style={{"display": "inline-block"}}> <svg id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="32" height="32">
    <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
</svg></div>
        </footer>
      </div>
    );
  }
}

export default App;


