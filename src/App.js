import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Poses from './components/Poses';
import AddPose from './components/AddPose';

const poses = [{id: 1, name: "Mountain Pose"}]

class App extends Component {

  constructor(props){
    super(props)
    this.state = {poses : poses}
    console.log("initial state", this.state)
  }

  addPose = (pose) => {
    pose.id = this.state.poses.length + 1
    this.setState({poses: [...this.state.poses, pose]})
    console.log("state after addPose", this.state);
  }

  render() {
    return (
      <div>
        <Poses poses={this.state.poses}/>
        <AddPose addPose={this.addPose}/>
      </div>
    );
  }
}

export default App;
