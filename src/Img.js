import React, { Component } from 'react'

export default class Img extends Component {
    handleDetails=()=>{
        this.props.handleDetailsClick()
    }
  render() {
    return (
      <div>
<img onClick={this.handleDetails} src={this.props.bookCover} alt="cover" />        
      </div>
    )
  }
}
