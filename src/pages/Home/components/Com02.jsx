import React, { Component } from 'react';
import { Button } from "@icedesign/base";
import emitter from './event';

export default class Com02 extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
  }
  componentWillMount() {
    
  }

  handleClick = (msg) => {
    console.log(`我是Com02，这是我发布的信息->：${msg}`)
    emitter.emit('onChange', msg);
  }

  render() {
    return (
      <div className="home-page">
        <Button onClick = {this.handleClick.bind(this,'Button被点击')}>Button02</Button>
      </div>
    );
  }
}
