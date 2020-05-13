import React, {Component} from "react";
//import 'react-bootstrap-carousel/dist/bootstrap.min.css';
//import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
//import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
//import { TwitterShareButton } from "react-share";
import ReactDOM from 'react-dom';
import './App.css';



const quotes = [
  {
    quote:
      "If you feel yourself hitting up against your limit, remember for what cause you clench your fists! Remember why you started down this path, and let that memory carry you beyond your limit.",
    author: "All Might"
  },

  {
    quote: "How can you move forward if you keep regretting the past?",
    author: "Edward Elric"
  },

  {
    quote:
      "Whether a fish lives in a clear stream or a water ditch, so long as it continues swimming forward, it will grow up beautifully.",
    author: "Koro-Sensei"
  },

  {
    quote: "Being alone is better than being with the wrong person.",
    author: "L Lawliet"
  },

  {
    quote:
      "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger, as well as kinder.",
    author: "Gildarts Clive"
  },

  {
    quote: "Human strength lies in the ability to change yourself.",
    author: "Saitama"
  },

  {
    quote: "A dropout will beat a genius through hard work.",
    author: "Rock Lee"
  },

  {
    quote: "If you can’t do something, then don’t. Focus on what you can do.",
    author: "Shiroe"
  },

  {
    quote:
      "Although I’m weak and full of flaws, I will never stop moving forward. No matter who I am, no one other than myself will create my own existence. No matter what others may think or feel, I will still move forward as myself.",
    author: "Oz Vessalius"
  },

  {
    quote:
      "Knowing you’re different is only the beginning. If you accept these differences, you’ll be able to get past them and grow even closer.",
    author: "Kobayashi"
  },

  {
    quote:
      "In this world, there’s no such thing as failure in the first place. The one who knows the ways to win more than anyone is also the one who’s experienced the most mistakes. In other words… You could say failure is equal to success… Couldn’t you?",
    author: "Toriko"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Quotes />
      </div>
    );
  }
}

var item = quotes[Math.floor(Math.random() * quotes.length)];

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      tweet: ""
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    var item = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({
      quote: item.quote,
      author: item.author,
    tweet: "https://twitter.com/intent/tweet?text="+ "'" + item.quote + "' --" + item.author
    });
  }
  
  
  componentDidMount(){
    var item = quotes[Math.floor(Math.random() * quotes.length)];
    
    this.setState({
      quote: item.quote,
      author: item.author,
    tweet: "https://twitter.com/intent/tweet?text="+ "'" + item.quote + "' --" + item.author
    });
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.quote === this.state.quote) {
      var item = quotes[Math.floor(Math.random() * quotes.length)];
    
    this.setState({
      quote: item.quote,
      author: item.author,
    tweet: "https://twitter.com/intent/tweet?text="+ "'" + item.quote + "' --" + item.author
    });
       
       }
  }

  render() {
    return (
      <div id="quote-box">
        <h3 id="text">{this.state.quote}</h3>
        <br />
        <h4 id="author">{this.state.author}</h4>
        <button type="button" id="new-quote" onClick={this.changeQuote} className="btn btn-info btn-lg">
          Change quote
        </button>
        <button><a className ="twitter-share-button" id="tweet-quote" href={this.state.tweet} target="_blank" role="button">tweet</a></button>
      </div>
    );
  }
}



export default Quotes;