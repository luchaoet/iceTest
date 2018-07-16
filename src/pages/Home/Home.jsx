import React, { Component } from 'react';
// import { http } from '../../utils/http';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.getList();
  }

  getList = async () => {
    // http('/rpa/data/homepage/app/develop/data',parmas).then(res=>{
    //   console.log(1,res) // 2
    // });
    // console.log(2) // 1
    
    // let tem = await http('/rpa/data/homepage/app/develop/data',parmas);
    // console.log(3,tem) // 3
    // console.log(4) // 4
  }

  render() {
    return <div className="home-page">哈哈哈哈哈哈</div>;
  }
}
