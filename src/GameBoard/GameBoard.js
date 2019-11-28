import React, { Component } from 'react'
import config from '../config'
import Cell from './Cell/Cell';

export default class GameBoard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      board: this.makeEmptyBoard(config.INITIAL_WIDTH, config.INITIAL_HEIGHT)
    }
  }

  makeEmptyBoard(width, height) {
    let board = [];

    for(let y = 0; y < height; y++) {
      board[y] = [];
      for(let x = 0; x < width; x++) {
        board[y][x] = false;
      }
    }

    return board;
  }


  start() {

  }

  stop() {

  }

  getDimension() {
    return {
      width: this.state.board.length,
      height: this.state.board[0].length
    };
  }

  render() {
    const { width, height } = this.getDimension();
    const cellSize = Math.min(Math.floor(1200 / width), Math.floor(800 / height));
    const spaceBetweenCell = 1;
    const cells = [];

    for(let y = 0; y < width; y++) {
      for(let x = 0; x < height; x++) {
        cells.push({
          x: x * (cellSize + spaceBetweenCell),
          y: y * (cellSize + spaceBetweenCell),
          alive: this.state.board[y][x]
        });
      }
    }

    const cellsRec = cells.map((cell) =>
      <Cell
        key={`${cell.y}.${cell.x}`}
        x={cell.x}
        y={cell.y}
        alive={cell.alive}
        size={cellSize}
      />
    )
    return (
      <svg
        width={(cellSize + spaceBetweenCell) * width}
        height={(cellSize + spaceBetweenCell) * height}
      >
        {cellsRec}
      </svg>
    )
  }

  getCells() {
    const { width, height } = this.getDimension();
    const pixelsPerCell = Math.min(Math.floor(1200 / width), Math.floor(800 / height));
    const spaceBetweenCell = 1;
    const cells = [];

    for(let y = 0; y < width; y++) {
      for(let x = 0; x < height; x++) {
        cells.push({
          x: x * (pixelsPerCell + spaceBetweenCell),
          y: y * (pixelsPerCell + spaceBetweenCell),
          alive: this.state.board[y][x],
          size: pixelsPerCell
        });
      }
    }

    return cells;
  }
}
