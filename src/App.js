import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// start of code change ONLY Want to rerender out APP component
// only provide slice of the state that we need to App component
//
// When a change occurs, it calls a function that we write called mapStateToProps(), and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.items, and allow our component to have access to them through a prop called items.
const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
