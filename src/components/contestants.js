import React, { Component } from 'react'


export default class Contestants extends Component {

  render() {
 
    return(
      <tr 
        ref={this.props.provided.innerRef}
        {...this.props.provided.draggableProps}
        {...this.props.provided.dragHandleProps}
      >
        <td>
          icon
        </td>
        <td>
          {this.props.id}
        </td>
        <td>
          {this.props.name} 
        </td>
        <td>
          {this.props.score}
        </td>
      </tr>
    )
  }
}