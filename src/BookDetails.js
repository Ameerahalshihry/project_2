import React, { Component } from 'react'
import Img from './Img'

export default class BookDetails extends Component {
    
  render(){
    return (
      <div style={{"display": "inline-block"}} className="col-lg-3 col-md-2 col-sm-1 col-xs-1">
 <Img bookCover={this.props.book} handleDetailsClick={this.props.onDetails}/>
      </div>
    )
  }
}
