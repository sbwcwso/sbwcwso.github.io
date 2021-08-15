$(document).ready(function() {
  ("use strict");
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  var tool = new Tool();

  // 给 tool 绑定一个 onMouseDown 的事件处理器
  tool.onMouseDown = function(event) {
    /* JavaScript 能自动识别传入的变量
     * 如果是三个数字，会被当成 x,y 坐标值和半径
     * 如果是两个参数，会被当成 point 对象和半径
     */
    // var c = Shape.Circle(event.point.x, event.point.y, 20);
    var c = Shape.Circle(event.point, 20);

    c.fillColor = "green";
  };

  paper.view.draw();
});
