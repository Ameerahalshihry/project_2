import React, { Component } from 'react'

export default class Search extends Component {

  
  render() {
    return (
      <div>
      <form onSubmit={this.props.searchBook} style={{"display": "inline-block"}} className="col-4">
          <input type="text" placeholder="search book by title" onChange={this.props.handleSearch}/>
          <button className="btnSearch"type="submit">Search</button> 
      </form> 
      {/* <form onSubmit={this.props.searchBook} style={{"display": "inline-block"}} className="col-4">
          <input type="text" placeholder="search book by author" onChange={this.props.handleSearch}/>
          <button className="btnSearch"type="submit">Search</button> 
      </form>
      <form onSubmit={this.props.searchBook} style={{"display": "inline-block"}} className="col-4">
          <input type="text" placeholder="search book by publisher" onChange={this.props.handleSearch}/>
          <button className="btnSearch"type="submit">Search</button> 
      </form>   */}
      </div>
    )
  }
}
