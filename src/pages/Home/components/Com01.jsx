import React, { Component } from 'react';
import { Button } from "@icedesign/base";
import emitter from './event'

export default class Com01 extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.listenerFun = emitter.addListener('onChange', (msg) => {
		console.log(`我是Com01，这是我接受到的信息->：${msg}`)
	})

  }
  componentWillUnmount() {
    emitter.removeListener(this.listenerFun)
  }

  render() {
    return (
      <div className="home-page">
        <Button>Button01</Button>
      </div>
    );
  }
}
