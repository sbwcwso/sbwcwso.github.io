/*
 * 使用基于浏览器的 JavaScript 时，都会将 JavaScript 代码
   写在 `$(document).ready(function() {`和 `});`之间
 *  * 确保了所有的 HTML 文件都在 JavaScript 执行之前加载完成
 *  * 可以帮助建立好的编程习惯
 * `use strict` 会让 JavaScript 解释器更严格地对待所写的代码
 *  * 能够帮助写出更好的 JavaScript代码
 *  * 可以避免一些常见却又难以定位的问题
 */

$(document).ready(function() {
  "use strict";
  console.log("main.js loaded");
});
