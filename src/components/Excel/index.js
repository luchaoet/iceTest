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
      // 行宽 默认 80 特殊宽度记录在此
      rowsWidth: {
        2: 50,
        3: 60,
        8: 70,
        10: 80,
      },
      // 列高 默认 20 特殊高度记录在此
      colsWidth: {
        5: 50,
      },
      // clientCells: [],
      clientRows: [],
      clientClos: [],
    };
  }

  createElement(w = 300, h = 150) {
    var ratio = window.devicePixelRatio || 1;
    var canvas = document.createElement("canvas");
    canvas.width = w * ratio; // 实际渲染像素
    canvas.height = h * ratio; // 实际渲染像素
    canvas.style.width = `${w}px`; // 控制显示大小
    canvas.style.height = `${h}px`; // 控制显示大小
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas;
  }

  componentDidMount() {
    const excelWrap = document.getElementById("excel-wrap");
    const { width, height } = getComputedStyle(excelWrap, "");
    const canvas_1 = this.createElement(parseInt(width), parseInt(height));
    excelWrap.appendChild(canvas_1);

    // 计算可视区域的单元格
    let w = 0;
    const _clientClos = [
      this.state.clientClos[0] || 0,
      this.state.clientClos[0] || 0,
    ];

    while (w < parseInt(width)) {
      _clientClos[1] = _clientClos[1] + 1;
      w += this.state.rowsWidth[`${_clientClos[1]}`] || 80;
    }

    const ctx_1 = canvas_1.getContext("2d");
    ctx_1.lineWidth = 1;
    ctx_1.strokeStyle = "#cecece";

    // ctx_1.beginPath();
    // const linkStartPointX = 74.5;
    // const linkStartPointY = 30.5;
    // ctx_1.moveTo(linkStartPointX, linkStartPointY);
    // ctx_1.lineTo(linkStartPointX + 50, linkStartPointY);
    // ctx_1.lineTo(linkStartPointX, linkStartPointY + 30);
    // ctx_1.lineTo(linkStartPointX, linkStartPointY + 80);
    // ctx_1.stroke();
    // ctx_1.closePath();

    // return;

    // 竖线
    w = 0;
    for (let index = _clientClos[0]; index < _clientClos[1]; index++) {
      const x = w + 0.5;
      ctx_1.beginPath();
      ctx_1.moveTo(x, 0);
      ctx_1.lineTo(x, 1000 * 20);
      ctx_1.stroke();
      ctx_1.closePath();
      w += this.state.rowsWidth[index] || 80;
    }

    // 横线
    for (let i = 0; i < 1000; i++) {
      const y = i * 20 + 0.5;
      ctx_1.beginPath();
      ctx_1.moveTo(0, y);
      ctx_1.lineTo(this.state.words.length * 80, y);
      ctx_1.stroke();
      ctx_1.closePath();
    }

    // ctx_1.clearRect(0, 0, 200, 1000 * 20.5);
    this.eventInit();
  }

  eventInit() {
    const excelWrap = document.getElementById("excel-wrap");
    excelWrap.addEventListener(
      this.isFirefox ? "DOMMouseScroll" : "mousewheel",
      this.handleWheel
    );
  }

  handleWheel(e) {
    e.preventDefault();
    const { deltaX, deltaY } = e;
    console.log(deltaX, deltaY);
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

  // 列名
  rowTitle(index) {
    const words = [
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
    ];
    const x = Math.floor(index / 26) - 1;
    const y = index % 26;
    return `${x >= 26 ? this.rowTitle(x) : words[x] || ""}${words[y]}`;
  }

  render() {
    const { areaSize } = this.state;

    return (
      <div ref="excelWrap" id="excel-wrap">
        <div className="excel-scrollbar-y">
          <div className="excel-scrollbar-thumb"></div>
        </div>
        <div className="excel-scrollbar-x">
          <div className="excel-scrollbar-thumb"></div>
        </div>
      </div>
    );
  }
}
