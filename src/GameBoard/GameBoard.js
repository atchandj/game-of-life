import React, { Component } from 'react';
import Cell from './Cell/Cell';

export default class GameBoard extends Component {
  handleClickOnCell(r, c) {
    this.props.toggleCellStatus(r, c);
  }

  getDimension() {
    return {
      height: this.props.board.length,
      width: this.props.board[0].length,
    };
  }

  render() {
    const { width, height } = this.getDimension();
    const cellSize = Math.min(
      Math.floor(800 / width),
      Math.floor(1200 / height)
    );
    const spaceBetweenCell = 1;
    const cells = [];

    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        cells.push({
          x: c * (cellSize + spaceBetweenCell),
          y: r * (cellSize + spaceBetweenCell),
          row: r,
          column: c,
          alive: this.props.board[r][c],
        });
      }
    }

    const cellsRec = cells.map((cell) => (
      <Cell
        key={`${cell.y}.${cell.x}`}
        x={cell.x}
        y={cell.y}
        row={cell.row}
        column={cell.column}
        alive={cell.alive}
        size={cellSize}
        toggleCellStatus={this.handleClickOnCell.bind(this)}
      />
    ));

    return (
      <svg
        width={(cellSize + spaceBetweenCell) * width}
        height={(cellSize + spaceBetweenCell) * height}
      >
        {cellsRec}
      </svg>
    );
  }

  getCells() {
    const { width, height } = this.getDimension();
    const pixelsPerCell = Math.min(
      Math.floor(1200 / width),
      Math.floor(800 / height)
    );
    const spaceBetweenCell = 1;
    const cells = [];

    for (let r = 0; r < width; r++) {
      for (let c = 0; c < height; c++) {
        cells.push({
          x: c * (pixelsPerCell + spaceBetweenCell),
          y: r * (pixelsPerCell + spaceBetweenCell),
          alive: this.props.board[r][c],
          size: pixelsPerCell,
        });
      }
    }

    return cells;
  }
}
