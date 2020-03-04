import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions";

class Header extends Component {

  
  render() {
    console.log('users', this.props.users, )
    let users;
    if(this.props.users !== null) {
      users = this.props.users.map(x =>(
      <li>{x.email}</li>
      ))
    }
    return (
      <>
        <h1>Header</h1>

        <ul>
          {users}
        </ul>
        <h1>Counter {this.props.counter}</h1>
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.decrement(1)}>-</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { counter: state.counter, users : state.users.state };
};
const mapDispatchToProps = { increment, decrement};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
