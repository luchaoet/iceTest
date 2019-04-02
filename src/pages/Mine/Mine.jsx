import React, { Component } from 'react';
import './Mine.scss'

export default class Mine extends Component {
  static displayName = 'About';

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  componentWillMount() {
		
  }

  render() {
    return (
      <div className="login-container">
          <div id="alibaba-login-iframe">
              <div id="alibaba-login-iframe-loading">
                  <p className='header'>提示</p>
                  <p className='body'>该帐号已在其他电脑登录，本机登录后会导致该帐号在其他电脑上自动退出并终止正在运行的流程</p>
                  <div className='footer'>
                    <button id="J_ConfirmLogin">继续登录</button>
                    <button id="J_CancelLogin">取消登录</button>
                  </div>
              </div>    
          </div>
      </div>
    )
  }
}
