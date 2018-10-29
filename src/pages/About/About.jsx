import React, { Component } from 'react';
import './About.scss'
import img from '../../utils/images/news.jpg'

export default class About extends Component {
  static displayName = 'About';

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentWillMount() {

		// ！可将变量转换成boolean类型，null、undefined、空字符串、0、NaN 取反都为false，其余都为true
		console.log(null,undefined, '', 0, false)
		console.log(!null,!undefined, !'', !0, !false,!NaN)

		
    
  }

  render() {
    return (
      <div className="about-page">
        {/* <dl className="pap">
            <dt><a href="javascript:;">Premier Li Keqiang on Thursday called on China and Japan to work together to build more mature, steady and progressive bilateral ties.</a></dt>
            <dd>
                <img src={img} alt=""/>
                <p>Chinese Premier Li Keqiang and Japanese Prime Minister Shinzo Abe who is on an official visit to China attend a reception marking the 40th anniversary of the signing of the China-Japan Treaty of Peace and Friendship at the Great Hall of the People in Beijing, capital of China, Oct. 25, 2018. Li Keqiang and Abe also took a group photo with some of the people who witnessed the signing of the treaty 40 years ago and their families. </p>
            </dd>
        </dl> */}
      
      </div>
    )
  }
}
