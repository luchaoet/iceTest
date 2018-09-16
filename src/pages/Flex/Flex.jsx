import React, { Component } from 'react';
import './Flex.scss'
import { Tab, Button } from "@icedesign/base";

const TabPane = Tab.TabPane;

const tabs = [
  { tab: "首页", key: "home", content: "这里是首页内容" },
  { tab: "文档", key: "doc", content: "这里是文档内容" },
  { tab: "API", key: "api", content: "这里是 API 内容" }
];

export default class Flex extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      value: 'doc'
    };
  }

  componentWillMount() {
    
  }

  handleChange = (key) => {
    console.log(key)
    this.setState({ value: key })
  }
  
  handleClick(key) {
    console.log(key)
    this.setState({ value: key })
  }

  render() {
    return (
      <div className="box1">
				{/* <span>1</span>
				<span>1</span>
				<span>3</span>
				<span>4</span>
        <span>5</span> */}

        <Tab activeKey={this.state.value} onChange={(key)=>this.handleChange}>
          {tabs.map(item => (
            <TabPane key={item.key} tab={item.tab} onClick={this.handleClick.bind(this)}>
              {item.content}
            </TabPane>
          ))}
        </Tab>

        <Button onClick={()=>{
          this.setState({
            value: 'api'
          })
        }}>click</Button>
        


				
			</div>
    )
  }
}
