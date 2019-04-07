import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    console.log(this.props.title);
    
    return (
      <div>
        <img src={this.props.url} alt="" />
<h2>{this.props.title}</h2>
<p>Author : <strong>{this.props.author}</strong></p>
<a href={this.props.info}className="button">Read more</a>
      </div>
    )
  }
}
