import React, { Component } from 'react'

export default class BookCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.current.cover.large} alt=""/>
       <h3>{this.props.current.title}</h3>
        <br/>
        <h5>Author:</h5>
        <a href={this.props.current.authors["0"].url} > {this.props.current.authors["0"].name}</a>
        <br/><br/>
        <h5>publish date:</h5>
        <h6>{this.props.current.publish_date}</h6>
        <br/>
        <a href={this.props.current.ebooks["0"].preview_url} className="button">Preview</a>
        {/* <button onClick={this.props.current.ebooks["0"].preview_url}>Preview</button> */}
        
        <a href={this.props.current.ebooks["0"].borrow_url} className="button">Borrow</a>

      </div>
    )
  }
}
  // console.log(data[`ISBN:${bookISBN}`].title);
         //console.log(data[`ISBN:${bookISBN}`].authors["0"].name);
         //console.log(data[`ISBN:${bookISBN}`].authors["0"].url);
         //console.log(data[`ISBN:${bookISBN}`].ebooks["0"].preview_url);
         //console.log(data[`ISBN:${bookISBN}`].ebooks["0"].borrow_url);
        //console.log(data[`ISBN:${bookISBN}`].publish_date);