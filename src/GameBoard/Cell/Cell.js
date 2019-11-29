import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);

    this.handleToggleCellStatus = this.handleToggleCellStatus.bind(this);
  }

  handleToggleCellStatus() {
    this.props.toggleCellStatus(this.props.row, this.props.column);
  }

  render() {
    return (
      <rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.size}
        height={this.props.size}
        fill={this.props.alive ? "#2bc7d4" : "#CCC"}
        onClick={() => this.handleToggleCellStatus()}
      ></rect>
    );
  }
}
