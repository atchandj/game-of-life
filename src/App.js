import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import GameBoard from "./GameBoard/GameBoard";
import Menu from "./Menu/Menu";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { INITIAL_WIDTH, INITIAL_HEIGHT, INITIAL_SPEED } from "./config";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.makeBoard(INITIAL_WIDTH, INITIAL_HEIGHT),
      playing: false,
      generation: 0,
      speed: INITIAL_SPEED,
      finished: false
    };
  }

  componentDidUpdate(previousProps, previousState) {
    if (!previousState.playing && this.state.playing) {
      this.runSteps();
    }
  }

  makeBoard(width, height, randomize = false) {
    let board = [];

    for (let r = 0; r < height; r++) {
      board[r] = [];
      for (let c = 0; c < width; c++) {
        board[r][c] = randomize ? Math.random() > 0.7 : false;
      }
    }

    return board;
  }

  play() {
    this.setState({ playing: true });
  }

  stop() {
    this.setState({ playing: false });
  }

  reset(randomize = false) {
    this.setState({
      board: this.makeBoard(INITIAL_WIDTH, INITIAL_HEIGHT, randomize),
      finished: false,
      generation: 0
    });
  }

  runSteps() {
    if (this.state.playing && !this.state.finished) {
      this.nextStep();
      setTimeout(this.runSteps.bind(this), this.state.speed);
    }
  }

  nextStep() {
    const newBoard = [];
    let changed = false;
    for (let r = 0; r < this.state.board.length; r++) {
      newBoard[r] = [];
      for (let c = 0; c < this.state.board[0].length; c++) {
        const nbAliveNeighbours = this.getNumberOfNeighboursAlive(r, c);
        const alive = this.state.board[r][c];
        newBoard[r][c] = false;
        if (nbAliveNeighbours === 3) {
          newBoard[r][c] = true;
        } else if (alive && nbAliveNeighbours === 2) {
          newBoard[r][c] = true;
        }

        if (alive !== newBoard[r][c]) {
          changed = true;
        }
      }
    }

    if (changed) {
      this.setState({
        board: newBoard,
        generation: this.state.generation + 1
      });
    } else {
      this.setState({
        finished: true,
        playing: false
      });
    }
  }

  getNumberOfNeighboursAlive(r, c) {
    const boardRowLength = this.state.board.length,
      boardColumnLength = this.state.board[0].length;
    let nb = 0;

    for (let r1 = r - 1; r1 <= r + 1; r1++) {
      for (let c1 = c - 1; c1 <= c + 1; c1++) {
        /**
         * Coordinate (r, c) belong to the cell from which we want the neighbours. We don't need to verify its value.
         * Verify we don't exceed the length of the board
         * Verify that the cell is alive
         */
        if (
          (c1 !== c || r1 !== r) &&
          r1 >= 0 &&
          r1 < boardRowLength &&
          c1 >= 0 &&
          c1 < boardColumnLength &&
          this.state.board[r1][c1]
        ) {
          nb++;
        }
      }
    }

    return nb;
  }

  toggleCellStatus(r, c) {
    const newBoard = JSON.parse(JSON.stringify(this.state.board));
    newBoard[r][c] = !this.state.board[r][c];
    this.setState({ board: newBoard });
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col sm={3}>
            <Menu
              play={this.play.bind(this)}
              stop={this.stop.bind(this)}
              reset={this.reset.bind(this)}
              nextStep={this.nextStep.bind(this)}
              generation={this.state.generation}
              playing={this.state.playing}
              finished={this.state.finished}
            />
          </Col>
          <Col sm={9}>
            <GameBoard
              board={this.state.board}
              toggleCellStatus={this.toggleCellStatus.bind(this)}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
