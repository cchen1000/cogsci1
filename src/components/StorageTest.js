import React, { Component }  from 'react';
var randomWords = require('random-words');

export default class StorageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 60,
      words: randomWords(30),
      value: '',
      playing: true,
      correct: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 componentWillMount = () => {
    this.myInterval = setInterval(() => {
      if (this.state.seconds > 0) this.setState(({seconds}) => ({seconds: seconds - 1}));
      if (this.state.seconds === 0) clearInterval(this.myInterval)
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.myInterval)
  } 

  handleChange = event => {    
    this.setState({value: event.target.value});
  }

  handleSubmit = event => {
    if (this.state.words.includes(this.state.value)) {
      this.setState(({correct}) => ({correct: correct+1}));
    }
    alert('A word was submitted: ' + this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  seeResults = () => {
    let msg;
    if (this.state.correct >= 5 && this.state.correct <=9) 
      msg = "Your working memory span is average (5-9 items)."
    else if (this.state.correct < 5) 
      msg = "Your working memory span is below average. Grouping items into a meaningful could be a good idea."
    else msg = "Your working memory is very good!"
    alert("You got " + this.state.correct + " correct.\n" + msg);
    window.location.reload();
  }

  render() {
    return (
      <div className="game-background">
        {this.state.seconds === 0 ?
          <div>
            <form onSubmit={this.handleSubmit} id="myform">
              <p>Enter in as many words as you can remember.</p>
              <p>Press "See Results" after you're done.</p>       
              <input type="text" value={this.state.value} onChange={this.handleChange} />                
            </form>
            <div className="button-wrapper">
              <button className="game-button" onClick={() => this.seeResults()}>See Results</button>
              <button className="game-button" onClick={() => window.location.reload()}>Quit</button>
            </div>
          </div>
        : 
          <div>
            <h1>Remember as many words as you can!</h1>
            <h1>Time Remaining: {this.state.seconds}</h1>
            <div className="word-wrapper">
              {this.state.words.slice(0,10).map(word => (<p>{word}</p>))}
              {this.state.words.slice(10,20).map(word => (<p>{word}</p>))}
              {this.state.words.slice(20,30).map(word => (<p>{word}</p>))}
            </div>
          </div>
        }
      </div>
    );
  }
}