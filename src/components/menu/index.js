import React, { Component } from "react";
import { Icon } from "@icedesign/base";
import "./index.scss";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    const { dataSource, expandedKeys } = this.handleProps(props);
    this.state = {
      dataSource,
      expandedKeys,
    };
  }

  handleProps(props) {
    const { dataSource, expandedKeys, ...others } = props;
    let _expandedKeys = [];

    handleDataSource(dataSource);

    return { dataSource, expandedKeys: _expandedKeys, ...others };

    function handleDataSource(dataSource) {
      if (!dataSource) return [];
      for (const obj of dataSource) {
        if (obj.key) {
          const keys = getKeys(obj);
          obj.keys = keys;
          const sign = expandedKeys.some((item) => keys.includes(item));
          if (sign) _expandedKeys = [...new Set([..._expandedKeys, ...keys])];
        }
        if (obj.children) {
          handleDataSource(obj.children);
        }
      }
    }

    function getKeys(obj, keys = []) {
      if (obj.key) keys.push(obj.key);
      if (obj.children) {
        for (const item of obj.children) {
          getKeys(item, keys);
        }
      }
      return keys;
    }
  }

  handleHead(key, children) {
    if (!children) return;
    let { expandedKeys } = this.state;
    const index = expandedKeys.findIndex((item) => item === key);
    if (index >= 0) {
      expandedKeys.splice(index, 1);
    } else {
      expandedKeys.push(key);
    }
    this.setState({ expandedKeys });
  }

  isExpanded(key) {
    const { expandedKeys } = this.state;
    return expandedKeys.indexOf(key) >= 0;
  }

  handle(dataSource) {
    const { draggable } = this.props;
    return (
      <ul className="tree">
        {dataSource.map(({ key, title, children }) => {
          const draggableCalss =
            draggable && !children ? "draggable-open" : "draggable-close";
          const isExp = this.isExpanded(key) && children;
          const expandedClass = isExp ? "expanded-open" : "expanded-close";
          return (
            <li className="next-tree-node show-dashed" key={key}>
              <div
                className={`next-tree-node-inner ${draggableCalss} ${expandedClass}`}
                onClick={() => this.handleHead(key, children)}
                draggable={draggable && !children}
              >
                {children && <Icon type="atm" />}
                <div className="title">
                  {title}-{key}
                </div>
              </div>
              {isExp && this.handle(children)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { dataSource } = this.state;
    return <div className="tree-wrap">{this.handle(dataSource)}</div>;
  }
}
