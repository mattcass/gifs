import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'

import RedditApi from './RedditApi'
import ExtractGifs from './extract-gifs'

import './App.css';

class App extends Component {
  state = {
    gifs: []
  }

  componentWillMount() {
    RedditApi.load()
      .then(ExtractGifs)
      .then(this.DisplayGifs)
  }

  DisplayGifs = (urls) => {
    this.setState({
      gifs: urls
    })
  }

  render() {
    return (
      <div className="App">
      <ul>
        {this.state.gifs.map((url, i) =>
          <LazyLoad height="50vh" key={i}>
            <li><img src={url} alt="a perfect loop"/></li>
          </LazyLoad>
        )}
      </ul>
      </div>
    );
  }
}

export default App;
