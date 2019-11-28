import React, { Component } from 'react'

export default class Cell extends Component {
  render() {
    return (
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.size}
        height={this.props.size}
        fill={this.props.alive ? '#2bc7d4' : '#CCC'}
      ></rect>
    )
  }
}
