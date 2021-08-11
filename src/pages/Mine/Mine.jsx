import React, { Component } from "react";
import "./Mine.scss";
import { Icon } from "@icedesign/base";
import Menu from "../../components/menu";
import Tree from "../../components/Tree";
import { uuid } from '../../utils/tools'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll'
import DraggleLayout from "../../components/DraggleLayout";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource2: [
        {
          label: '工程名称',
          type: 'main-dir',
          id: uuid(),
          children: [
            {
              label: '主流程',
              id: uuid(),
              type: 'main-file',
            },
            {
              label: '子流程',
              id: uuid(),
              type: 'sub-file',
              // edit: true
            },
            {
              label: '分组',
              id: uuid(),
              type: 'sub-dir',
              children: [
                {
                  label: '子流程',
                  id: uuid(),
                  type: 'sub-file',
                },
              ]
            },
            {
              label: '分组',
              id: uuid(),
              type: 'sub-dir',
              children: [
                {
                  label: '子流程',
                  id: uuid(),
                  type: 'sub-file',
                },
              ]
            }
          ]
        }
      ]
    };
  }

  componentWillMount() {}

  render() {
    const dataSource1 = [
      {
        title: "哈哈哈",
        key: "ha",
        children: [
          {
            title: "哈哈哈",
            key: "hei",
          },
          {
            title: "哈哈哈",
            key: "hei2",
            children: [
              { title: "哈哈哈", key: "hei3" },
              {
                title: "哈哈哈",
                key: "hei4",
              },
            ],
          },
        ],
      },
      {
        title: "哈哈哈",
        key: "ha2",
        children: [
          {
            title: "哈哈哈",
            key: "hei22",
          },
          {
            title: "哈哈哈",
            key: "hei23",
            children: [
              { title: "哈哈哈", key: "hei32" },
              {
                title: "哈哈哈",
                key: "hei42",
                children: [
                  { title: "哈哈哈", key: "hei321" },
                  {
                    title: "哈哈哈",
                    key: "hei421",
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    const { dataSource2 } = this.state;
    return (
      <div>
        <Menu draggable dataSource={dataSource1} expandedKeys={["hei4"]} />
        <div>-----------------</div>
        <Tree dataSource={dataSource2} defaultExpandedKeys={[dataSource2[0].id]} />
        <div>-----------------</div>
        <div style={{
          // position: 'relative',
          // height: '50px',
          // width: '100%',
          // overflow: 'hidden'
        }}>
        <ReactIScroll iScroll={iScroll} options={{
          mouseWheel: true,
          scrollbars: true,
          scrollX: true,
          scrollY: false
        }}>
          <ul className="iScroll-ul">
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
          </ul>
        </ReactIScroll>

        <div>-----------------</div>

        <div style={{
          width: '100%',
          overflowX: 'auto'
        }}>
        <ul className="iScroll-ul">
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
            <li>111</li>
          </ul>
        </div>

        </div>

        <div>------------------</div>
        <DraggleLayout draggleBorder="right" max={150} min={50} style={{
          border: '1px solid #333',
          width: 300,
          height: 100,
        }}>
          <div>1312312</div>
          <div>1312312</div>
          <div>1312312</div>
          <div>1312312</div>
        </DraggleLayout>


      </div>
    )
  }
}
