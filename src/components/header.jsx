import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Header extends Component {
  state = {};
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log('users', this.props.users, )
  }
  
  render() {
    // console.log('users', this.props.users, )
    return (
      <>
        <h1>Hello {this.props.counter}</h1>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { counter: state.counter, users : state.users.state };
};
const mapDispatchToProps = { increment, decrement};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
