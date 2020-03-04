import React, { Component } from "react";
import { getUser } from "../actions";
import { connect } from "react-redux";

class Fetch extends Component {



//   request = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const json = await response.json()
//     console.log(json);
//     this.props.getUser(json);
//     console.log(this.props.users);
//   };


  componentDidMount() {
    // this.request();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json()).then(data=>console.log(data))
    .catch(err =>{console.log(err)})
  }
  render() {
    return <div>Fetch</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.users.state };
};
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);

// export default Fetch;
