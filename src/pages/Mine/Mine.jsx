import React, { Component } from "react";
import "./Mine.scss";
import { Icon } from "@icedesign/base";
import Menu from "../../components/menu";

export default class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    const dataSource = [
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

    return <Menu draggable dataSource={dataSource} expandedKeys={["hei4"]} />;
  }
}
