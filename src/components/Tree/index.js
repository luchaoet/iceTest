import React, { Component } from "react";
import { Input, Icon, Dropdown, Menu } from "@icedesign/base";
import "./index.module.scss";

const iconType = {
  "main-dir": "account",
  "sub-dir": "form",
  "main-file": "ellipsis",
  "sub-file": "ellipsis",
};

export default class Tree extends Component {
  constructor(props) {
    super(props);
    const { defaultExpandedKeys, dataSource } = props;
    this.state = {
      dataSource,
      expandedKeys: [...defaultExpandedKeys],
    };
  }

  onTitleClick(info) {
    const { id, type } = info;
    if (type !== "sub-dir") return;
    const _expandedKeys = this.state.expandedKeys;
    const index = _expandedKeys.findIndex((k) => k === id);
    if (index >= 0) {
      _expandedKeys.splice(index, 1);
    } else {
      _expandedKeys.push(id);
    }
    this.setState({ expandedKeys: _expandedKeys });
  }

  onTitleDoubleClick(info) {
    const { id, type } = info;
    if (type === "sub-file" || type === "main-file") {
      console.log("打开文件");
    }
  }

  onTitleDragEnter(e, info) {
    e.preventDefault();
    const { id, type } = info;
    if (type === "sub-dir") {
      const _expandedKeys = this.state.expandedKeys;
      const index = _expandedKeys.findIndex((k) => k === id);
      if (index >= 0) {
        return;
      } else {
        _expandedKeys.push(id);
      }
      this.setState({ expandedKeys: _expandedKeys });
    }
  }

  onAreaDragEnter(e) {
    e.target.classList.add("rpa-tree-enter");
  }

  onAreaDragLeave(e) {
    e.target.classList.remove("rpa-tree-enter");
  }

  onAreaDrap(e, data, location) {
    console.log(data, location);
    e.preventDefault();
    console.log(e.target);
    e.target.classList.remove("rpa-tree-enter");
  }

  onDragTitleStart(e, info) {
    console.log("onDragTitleStart");
  }

  isExpanded(key) {
    const { expandedKeys } = this.state;
    return expandedKeys.indexOf(key) >= 0;
  }

  renderDragArea(deep, data, location) {
    return (
      <li
        style={{
          marginLeft: deep * 15 + 10,
        }}
        className="rpa-tree-area"
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => this.onAreaDragEnter(e)}
        onDragLeave={(e) => this.onAreaDragLeave(e)}
        onDrop={(e) => this.onAreaDrap(e, data, location)}
      ></li>
    );
  }

  onInputBlur(e) {
    console.log(e.target.value);
    e.target.select();
  }

  renderChildren(data = [], deep = 0) {
    return (
      <ul className="rpa-tree-item">
        {data.map((item, index) => {
          const { id, label, type, children, edit } = item;
          const isExp = this.isExpanded(id) && children;
          // const expandedClass = isExp ? "expanded-open" : "expanded-close";
          return (
            <React.Fragment key={id || index}>
              {this.renderDragArea(deep, item, "before")}
              <li>
                <div
                  className="rpa-tree-title"
                  onClick={() => this.onTitleClick(item)}
                  onDoubleClick={() => this.onTitleDoubleClick(item)}
                  style={{ paddingLeft: deep * 15 }}
                  onDragEnter={(e) => this.onTitleDragEnter(e, item)}
                  onDragStart={(e) => this.onDragTitleStart(e, item)}
                >
                  <div draggable={!edit} className="rpa-tree-title-content">
                    <Icon size="small" type={iconType[type]} />
                    {edit ? (
                      <Input defaultValue={label} onBlur={this.onInputBlur} />
                    ) : (
                      <p className="ellipsis" title={label}>
                        {label}
                      </p>
                    )}
                    {/* <p className="ellipsis" title={label}>
                      {label}
                    </p> */}
                  </div>
                </div>
                {isExp && this.renderChildren(children, deep + 1)}
              </li>
              {index === data.length - 1 &&
                this.renderDragArea(deep, item, "after")}
            </React.Fragment>
          );
        })}
      </ul>
    );
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className="rpa-tree-wrap">{this.renderChildren(dataSource)}</div>
    );
  }
}
