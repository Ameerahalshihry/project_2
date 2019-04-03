import React, { Component } from 'react'
import Img from './Img'

export default class BookDetails extends Component {
    
  render(){
    return (
      <div style={{"display": "inline-block"}} className="col-3">
 <Img bookCover={this.props.book} handleDetailsClick={this.props.onDetails}/>
      </div>
    )
  }
}
