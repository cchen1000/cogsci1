import React, { Component } from "react";
import StorageTest from "./StorageTest";

export default class Home extends Component {
  state = {
    playing: false,
    game: ''
  }
  renderGame() {
    if (this.state.game === "storage") return (<StorageTest/>);
    else if (this.state.game === "search") console.log("yo");
  }
  render() {
    return (
      <div> {!this.state.playing ? 
        <div className="App" >
          Working Memory Test
          <div className="button-wrapper">
            <button className="game-button" onClick={() => this.setState({playing: true, game: "storage"})}> 
              Play Storage Test
            </button>
          </div>
          <p className="author">Made by Cheng Bin Chen for COGS2120 S21</p>
        </div>
      : this.renderGame()}</div>
    );
  }
}