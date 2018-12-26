import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseNum } from './redux/actions';

import logo from './logo.svg';
import './App.css';

const num = 5;
class App extends Component {
  increase = () => {
    this.props.increaseNum(num);
  };

  render() {
    console.log(this.props.count);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button 
            className="App-btn" 
            onClick={this.increase}>Increase Test</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increaseNum: num => dispatch(increaseNum(num)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
