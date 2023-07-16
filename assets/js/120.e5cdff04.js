(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{719:function(a,t,e){"use strict";e.r(t);var s=e(12),r=function(a){a.options.__data__block__={markmap_1a96284d:"- [Machine-Level Programming](#machine-level-programming)\n  - [Basic](#basic)\n    - [Intel x86 Processors](#intel-x86-processors)\n    - [Assembly/Machine Code View](#assemblymachine-code-view)\n    - [Registers](#registers)\n    - [Moving Data](#moving-data)\n  - [Control](#control)\n    - [Condition codes](#condition-codes)\n    - [Conditional branches](#conditional-branches)\n    - [Loop](#loop)\n    - [Switch Statements](#switch-statements)\n  - [Procedures](#procedures)\n  - [Data](#data)\n  - [Advanced Topics](#advanced-topics)"}},i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"machine-level-programming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#machine-level-programming"}},[a._v("#")]),a._v(" Machine-Level Programming")]),a._v(" "),e("Markmap",{attrs:{id:"markmap_1a96284d",code:a.$dataBlock.markmap_1a96284d}}),e("h2",{attrs:{id:"basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[a._v("#")]),a._v(" Basic")]),a._v(" "),e("h3",{attrs:{id:"intel-x86-processors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intel-x86-processors"}},[a._v("#")]),a._v(" Intel x86 Processors")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Complex instruction set computer (CISC)")])]),a._v(" "),e("li",[e("p",[a._v("RISC")])]),a._v(" "),e("li",[e("p",[a._v("IA32")])]),a._v(" "),e("li",[e("p",[a._v("x86-64")])]),a._v(" "),e("li",[e("p",[a._v("ARM")])])]),a._v(" "),e("h3",{attrs:{id:"assemblymachine-code-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assemblymachine-code-view"}},[a._v("#")]),a._v(" Assembly/Machine Code View")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("PC: Program counter")])]),a._v(" "),e("li",[e("p",[e("code",[a._v("gcc -Og -S sum.c")])])])]),a._v(" "),e("h3",{attrs:{id:"registers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registers"}},[a._v("#")]),a._v(" Registers")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("%rsp")]),a._v(" stack")])]),a._v(" "),e("h3",{attrs:{id:"moving-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#moving-data"}},[a._v("#")]),a._v(" Moving Data")]),a._v(" "),e("h2",{attrs:{id:"control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[a._v("#")]),a._v(" Control")]),a._v(" "),e("h3",{attrs:{id:"condition-codes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#condition-codes"}},[a._v("#")]),a._v(" Condition codes")]),a._v(" "),e("h3",{attrs:{id:"conditional-branches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conditional-branches"}},[a._v("#")]),a._v(" Conditional branches")]),a._v(" "),e("h3",{attrs:{id:"loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loop"}},[a._v("#")]),a._v(" Loop")]),a._v(" "),e("ul",[e("li",[a._v("For-While Conversion")])]),a._v(" "),e("h3",{attrs:{id:"switch-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switch-statements"}},[a._v("#")]),a._v(" Switch Statements")]),a._v(" "),e("h2",{attrs:{id:"procedures"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#procedures"}},[a._v("#")]),a._v(" Procedures")]),a._v(" "),e("ul",[e("li",[a._v("ABI(二进制程序接口)")]),a._v(" "),e("li",[a._v("Stack\n"),e("ul",[e("li",[a._v("Grows toward lower address")]),a._v(" "),e("li",[e("code",[a._v("%rsp")]),a._v(" "),e("ul",[e("li",[a._v('address of "top" element')])])])])]),a._v(" "),e("li",[a._v("Passing control")]),a._v(" "),e("li",[a._v("Passing data")]),a._v(" "),e("li",[a._v("Managing local data")]),a._v(" "),e("li",[a._v("Stack Frame\n"),e("ul",[e("li",[e("code",[a._v("%rbp")]),a._v(" Frame Pointer")])])]),a._v(" "),e("li",[a._v("Register Saving Conventions\n"),e("ul",[e("li",[a._v("Caller Saved")]),a._v(" "),e("li",[a._v("Callee Saved")])])])]),a._v(" "),e("h2",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[a._v("#")]),a._v(" Data")]),a._v(" "),e("ul",[e("li",[a._v("Array\n"),e("ul",[e("li",[a._v("one dimensional")]),a._v(" "),e("li",[a._v("multi dimensional")])])]),a._v(" "),e("li",[a._v("Structures\n"),e("ul",[e("li",[a._v("Alignment\n"),e("ul",[e("li",[a._v("only for base data")])])])])]),a._v(" "),e("li",[a._v("Floating Point\n"),e("ul",[e("li",[a._v("SSE")]),a._v(" "),e("li",[a._v("SIMD")])])])]),a._v(" "),e("h2",{attrs:{id:"advanced-topics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-topics"}},[a._v("#")]),a._v(" Advanced Topics")]),a._v(" "),e("ul",[e("li",[a._v("Memory Layout\n"),e("ul",[e("li",[e("details",{staticClass:"custom-block details"},[e("summary",[a._v("x86-64 Linux Memory Layout")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/sbwcwso/PicBed/master/20220113102753.png",alt:"20220113102753"}})])])])])]),a._v(" "),e("li",[a._v("Buffer Overflow")]),a._v(" "),e("li",[a._v("Unions")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(i);t.default=i.exports}}]);