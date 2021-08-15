$(document).ready(function() {
  ("use strict");
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  // 圆与圆之间相距 50 个像素，绘制出 64 个园
  var c;
  for (var x = 25; x < 400; x += 50) {
    for (var y = 25; y < 400; y += 50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = "green";
    }
  }

  paper.view.draw();
});
