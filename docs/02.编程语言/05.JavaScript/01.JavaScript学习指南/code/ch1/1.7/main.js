$(document).ready(function() {
  ("use strict");
  // 将 Paper.js 注册为一个全局变量
  paper.install(window);
  // 将 paper.js 附在 canvas 上， 同时准备绘图
  paper.setup(document.getElementById("mainCanvas"));

  // 通过三个参数创建一个 circle 对象，参数分别是圆心的 x 、y 坐标和半径
  var c = Shape.Circle(200, 200, 50);
  c.fillColor = "green";

  paper.view.draw();
});
