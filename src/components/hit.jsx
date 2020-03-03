import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions";
import Axios from "axios";

class Hit extends Component {
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(Response => {
      this.props.getUser(Response.data);
      console.log('user', this.props.users);
    });
  }
  render() {
    const data = this.props.users;
    return (
      <div>
        {data.map(x => (
          <div key={x.id}>
              {x.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users.state };
};
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(Hit);
