import React, { Component } from "react";
import "./index.scss";

export default class Excel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  }

  componentDidMount() {
    const ratio = window.devicePixelRatio || 1;
    const excelWrap = document.getElementById("excel-wrap");
    const { width, height } = getComputedStyle(excelWrap, "");
    const canvas_1 = document.createElement("canvas");
    canvas_1.width = parseInt(width) * ratio; // 实际渲染像素
    canvas_1.height = parseInt(height) * ratio; // 实际渲染像素
    canvas_1.style.width = width; // 控制显示大小
    canvas_1.style.height = height; // 控制显示大小
    canvas_1.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    excelWrap.appendChild(canvas_1);

    const ctx_1 = canvas_1.getContext("2d");
    ctx_1.lineWidth = 1;
    ctx_1.strokeStyle = "#cecece";
    // 竖线
    this.state.words.forEach((item, index) => {
      const x = index * 80 + 0.5;
      ctx_1.beginPath();
      ctx_1.moveTo(x, 0);
      ctx_1.lineTo(x, 1000 * 20);
      ctx_1.stroke();
      ctx_1.closePath();
    });

    // 横线
    for (let i = 0; i < 1000; i++) {
      const y = i * 20 + 0.5;
      ctx_1.beginPath();
      ctx_1.moveTo(0, y);
      ctx_1.lineTo(this.state.words.length * 80, y);
      ctx_1.stroke();
      ctx_1.closePath();
    }
  }

  drawLine({
    context,
    startPointX = 0,
    startPointY = 0,
    lineWidth = 1,
    strokeStyle = "#333",
  }) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
    const linkStartPointX = startPointX;
    const linkStartPointY = startPointY;
    context.moveTo(linkStartPointX, linkStartPointY);
    context.lineTo(linkStartPointX + 50, linkStartPointY);
    context.lineTo(linkStartPointX, linkStartPointY + 30);
    context.lineTo(linkStartPointX, linkStartPointY + 80);
    context.stroke();
    context.closePath();
  }

  // createElement(w = 300, h = 150) {
  //   var ratio = window.devicePixelRatio || 1;
  //   var canvas = document.createElement("canvas");
  //   canvas.width = w * ratio; // 实际渲染像素
  //   canvas.height = h * ratio; // 实际渲染像素
  //   canvas.style.width = `${w}px`; // 控制显示大小
  //   canvas.style.height = `${h}px`; // 控制显示大小
  //   canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
  //   return canvas;
  // }

  render() {
    const { areaSize } = this.state;

    return <div ref="excelWrap" id="excel-wrap" style={{ height: 600 }}></div>;
  }
}
