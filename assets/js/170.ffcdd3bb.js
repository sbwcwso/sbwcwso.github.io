(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{738:function(t,l,s){"use strict";s.r(l);var i=s(12),a=function(t){t.options.__data__block__={markmap_1a96284d:"- [I/O 接口](#io-接口)\n  - [I/O接口概述](#io接口概述)\n  - [接口的功能和组成](#接口的功能和组成)\n  - [I/O 接口的基本组成](#io-接口的基本组成)\n  - [接口类型](#接口类型)"}},v=Object(i.a)({},(function(){var t=this,l=t.$createElement,s=t._self._c||l;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"io-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-接口"}},[t._v("#")]),t._v(" I/O 接口")]),t._v(" "),s("Markmap",{attrs:{id:"markmap_1a96284d",code:t.$dataBlock.markmap_1a96284d}}),s("h2",{attrs:{id:"io接口概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io接口概述"}},[t._v("#")]),t._v(" I/O接口概述")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("I/O 接口的功能")]),t._v(" "),s("ol",[s("li",[t._v("实现设备的选择")]),t._v(" "),s("li",[t._v("实现数据缓冲达到速度匹配")]),t._v(" "),s("li",[t._v("实现数据串--并格式转换")]),t._v(" "),s("li",[t._v("实现电平转换")]),t._v(" "),s("li",[t._v("传送控制命令")]),t._v(" "),s("li",[t._v("反映设备的状态\n"),s("ul",[s("li",[t._v("“忙”、“就绪”、“中断请求”")])])])])]),t._v(" "),s("h2",{attrs:{id:"接口的功能和组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口的功能和组成"}},[t._v("#")]),t._v(" 接口的功能和组成")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("总线连接方式的 I/O 接口电路")]),t._v(" "),s("ul",[s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210904090727-2021-09-04-09-07-27.png",alt:"20210904090727-2021-09-04-09-07-27"}})]),t._v(" "),s("li",[t._v("设备选择线")]),t._v(" "),s("li",[t._v("数据线")]),t._v(" "),s("li",[t._v("命令线")]),t._v(" "),s("li",[t._v("状态线")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("接口的功能和组成")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("组成")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("选址功能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设备选择电路")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("传送命令的功能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("命令寄存器、命令译码器")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("传送数据的功能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数据缓冲寄存器")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("反映设备状态的功能")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设备状态标记")])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("设备状态的相关触发器")]),t._v(" "),s("ul",[s("li",[t._v("完成触发器 D")]),t._v(" "),s("li",[t._v("工作触发器 B")]),t._v(" "),s("li",[t._v("中断请求触发器 INTR")]),t._v(" "),s("li",[t._v("屏蔽触发器 MASK\n"),s("ul",[s("li",[t._v("可以中断的优先级屏蔽中断请求")])])])])])]),t._v(" "),s("h2",{attrs:{id:"io-接口的基本组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#io-接口的基本组成"}},[t._v("#")]),t._v(" I/O 接口的基本组成")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210904091426-2021-09-04-09-14-26.png",alt:"20210904091426-2021-09-04-09-14-26"}})]),t._v(" "),s("h2",{attrs:{id:"接口类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口类型"}},[t._v("#")]),t._v(" 接口类型")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("按数据 传送方式 分类")]),t._v(" "),s("ul",[s("li",[t._v("并行接口\n"),s("ul",[s("li",[t._v("Intel 8255")])])]),t._v(" "),s("li",[t._v("串行接口\n"),s("ul",[s("li",[t._v("Intel 8251")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("按功能 选择的灵活性 分类")]),t._v(" "),s("ul",[s("li",[t._v("可编程接口\n"),s("ul",[s("li",[t._v("Intel 8255、 Intel 8251")])])]),t._v(" "),s("li",[t._v("不可编程接口\n"),s("ul",[s("li",[t._v("Intel 8212")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("按 通用性 分类")]),t._v(" "),s("ul",[s("li",[t._v("通用接口\n"),s("ul",[s("li",[t._v("Intel 8255、 Intel 8251")])])]),t._v(" "),s("li",[t._v("专用接口\n"),s("ul",[s("li",[t._v("Intel 8279、 Intel 8275")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("按数据传送的 控制方式 分类")]),t._v(" "),s("ul",[s("li",[t._v("中断接口\n"),s("ul",[s("li",[t._v("Intel 8259")])])]),t._v(" "),s("li",[t._v("DMA 接口\n"),s("ul",[s("li",[t._v("Intel 8257")])])])])])],1)}),[],!1,null,null,null);"function"==typeof a&&a(v);l.default=v.exports}}]);