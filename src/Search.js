import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    console.log(this.props.title);
    
    return (
      <div>
        <img src={this.props.url} alt="" />
<h2>{this.props.title}</h2>
<p>{this.props.author}</p>
<a href={this.props.info}className="button">Read more</a>


     {/* <form onSubmit={this.props.searchBook} style={{"display": "inline-block"}} className="col-4">
          <input type="text" placeholder="search book by title" onChange={this.props.handleSearch}/>
          <button className="btnSearch"type="submit">Search</button> 
      </form>  */}
      </div>
    )
  }
}
