import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Two extends Component {
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
        <div>Two</div>
        <div>{this.context.color}</div>
      </div>
    )
  }
}