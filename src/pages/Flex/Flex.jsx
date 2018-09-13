import React, { Component } from 'react';
import './Flex.scss'

export default class Flex extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className="box">
				<span>1</span>
				<span>1</span>
				<span>3</span>
				<span>4</span>
				<span>5</span>
				
			</div>
    )
  }
}
