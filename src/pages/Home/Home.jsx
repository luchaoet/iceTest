import React, { Component } from 'react';
import { http } from '../../utils/http';

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
    const params = {
      currentPage: 1,
      pageSize: 6,
      status: '',
      departmentId:'',
      roleId:'',
    }
    // /services/enterprise/employee/list?currentPage=1&pageSize=15&status=-1&departmentId=-1&roleId=-1
    // http('/services/enterprise/employee/list',params).then( res => {
    //   console.log(res)
    // })

    // let tem = await http('/services/cs/user/baseinfo');
    // console.log(tem)
    // console.log(4) // 4
  }

  render() {
    return (
      <div className="home-page">
        <img src={require('../../utils/images/news.jpg')} alt=""/>
      </div>
    );
  }
}
