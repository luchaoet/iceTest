import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Two from '../Two/Two'

export default class One extends Component {
    static contextTypes = {
        color: PropTypes.string
    }
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  componentWillMount() {
		
  }

  render() {
    return (
      <div>
        <span>One</span>
        <div>{this.context.color}</div>
        <Two />
      </div>
    )
  }
}