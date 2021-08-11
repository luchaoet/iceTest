import React, { Component } from "react";
import cx from "classnames";
import "./index.scss";

const border = {
  right: "right",
  top: "top",
  left: "left",
  bottom: "bottom",
};

export default class DraggleLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: props.style,
      draggleBorder: border[props.draggleBorder] || "top",
    };
  }

  //计算是否超出屏幕
  InWindow = (left, top, startPosX, startPosY) => {
    let H = document.body.clientHeight;
    let W = document.body.clientWidth;
    if (
      (left < 20 && startPosX > left) ||
      (left > W - 20 && startPosX < left) ||
      (top < 20 && startPosY > top) ||
      (top > H - 20 && startPosY < top)
    ) {
      return false;
    }
    return true;
  };

  onMouseDown = (e) => {
    e.preventDefault();
    let startPosX = e.clientX;
    let startPosY = e.clientY;
    const _this = this;
    const { style, draggleBorder } = this.state;
    document.body.onmousemove = (e) => {
      let left = e.clientX - startPosX;
      let top = e.clientY - startPosY;
      if (this.InWindow(e.clientX, e.clientY, startPosX, startPosY)) {
        const size =
          draggleBorder === "top" || draggleBorder === "bottom"
            ? { height: style.height + top }
            : { width: style.width + left };
        _this.setState({
          style: {
            ...style,
            ...size,
          },
        });
      } else {
        document.body.onmousemove = null;
        document.body.onmouseup = null;
      }
    };
    document.body.onmouseup = () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
    };
  };

  render() {
    const { children = null, min = 50, max = 200 } = this.props;
    const { style, draggleBorder } = this.state;
    const className = cx(
      "draggle-layout-border",
      `draggle-layout-border-${draggleBorder}`
    );
    return (
      <div style={style} className="draggle-layout-wrap">
        <p className={className} onMouseDown={this.onMouseDown} />
        <div className="draggle-layout-container">{children}</div>
      </div>
    );
  }
}
