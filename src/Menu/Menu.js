/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css';

export default class Menu extends Component {
  handleClickOnPlay() {
    this.props.play();
  }

  handleClickOnStop() {
    this.props.stop();
  }

  handleClickOnStep() {
    this.props.nextStep();
  }

  handleClickOnReset(randomize = false) {
    this.props.reset(randomize);
  }

  render() {
    let countClass = 'count';

    if (this.props.finished) {
      countClass += ' finished';
    }
    return (
      <div className="menu">
        <div>
          <blockquote className="blockquote">
            <p className="h1 mb-0">Game of life</p>
            <footer className="blockquote-footer">By atchandj</footer>
          </blockquote>
        </div>
        <div className="generation">
          <span>
            Generation:&nbsp;
            <span className={countClass}>{this.props.generation}</span>
          </span>
        </div>
        <div>
          {this.props.playing ? this.getStopButton() : this.getStartButton()}
        </div>

        <div>
          <a title="Next step" onClick={this.handleClickOnStep.bind(this)}>
            <FontAwesomeIcon icon="step-forward" />
            Step
          </a>
        </div>

        <div>
          <a
            title="Random"
            onClick={() => {
              this.handleClickOnReset(true);
            }}
          >
            <FontAwesomeIcon icon="random" />
            Random board
          </a>
        </div>

        <div>
          <a
            title="Reset"
            onClick={() => {
              this.handleClickOnReset(false);
            }}
          >
            <FontAwesomeIcon icon="sync" />
            Reset
          </a>
        </div>
      </div>
    );
  }

  getStartButton() {
    return (
      <a title="Start" onClick={this.handleClickOnPlay.bind(this)}>
        <FontAwesomeIcon icon="play" />
        Play
      </a>
    );
  }

  getStopButton() {
    return (
      <a title="Stop" onClick={this.handleClickOnStop.bind(this)}>
        <FontAwesomeIcon icon="stop" />
        Stop
      </a>
    );
  }
}
