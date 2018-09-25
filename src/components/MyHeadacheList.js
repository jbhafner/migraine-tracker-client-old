import React, { Component } from "react";
import { connect } from "react-redux";
import MyHeadacheTable from "./MyHeadacheTable";
import { fetchHeadaches, removeHeadache } from "../store/actions/headaches.js";
import { getAllHeadaches } from "../store/actionCreators.js";

class MyHeadacheList extends Component {
  constructor(props) {
    super(props);
    this.updateHeadaches = this.updateHeadaches.bind(this);
    // this.removeHeadache=this.removeHeadache.bind(this);
    console.log("this.props", this.props, "this.props.id", this.props.id);
  }

  // componentWillUpdate() {
  //   let id = this.props.id;
  //   this.updateHeadaches(id);
  // }
  removeHeadache(user_id, headache_id) {
    console.log(
      "removeHeadache called / user_id:",
      user_id,
      "headache_id:",
      headache_id
    );
    this.props.removeHeadache(user_id, headache_id);
  }

  async updateHeadaches() {
    console.log("updateHeadaches called");
    let headacheArray = await [];
    await this.props.getAllHeadaches();
  }

  render() {
    console.log(
      "MyHeadacheList.js/render - this.props.myHeadaches",
      this.props.myHeadaches,
      "isArr?",
      Array.isArray(this.props.myHeadaches)
    );
    // const {headaches} = this.props;
    console.log("this.props.myHeadaches", this.props.myHeadaches);
    console.log("this.removeHeadache", this.removeHeadache)
    let myHeadacheTable = (
      <MyHeadacheTable
        myHeadaches={this.props.myHeadaches}
        removeHeadache={this.removeHeadache}
      />
    );

    return (
      <div className="MyHeadacheList">
        <h1>MyHeadacheList Component</h1>
        {myHeadacheTable}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myHeadaches: state.headaches.myHeadaches,
    id: state.currentUser.user.id
  };
}
export default connect(
  mapStateToProps,
  { fetchHeadaches, removeHeadache, getAllHeadaches }
)(MyHeadacheList);
