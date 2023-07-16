(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{820:function(v,_,l){"use strict";l.r(_);var t=l(12),i=function(v){v.options.__data__block__={markmap_1a96284d:"- [虚电路网络与数据报网络](#虚电路网络与数据报网络)\n  - [虚电路网络(Virtual circuits)](#虚电路网络virtual-circuits)\n    - [虚电路网络的通信过程](#虚电路网络的通信过程)\n    - [虚电路网络的具体实现](#虚电路网络的具体实现)\n    - [虚电路(VC)转发表](#虚电路vc转发表)\n    - [虚电路信令协议](#虚电路信令协议)\n  - [数据报网络](#数据报网络)\n    - [数据报转发表](#数据报转发表)\n  - [数据报网络与 VC 网络的对比](#数据报网络与-vc-网络的对比)"}},a=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"虚电路网络与数据报网络"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路网络与数据报网络"}},[v._v("#")]),v._v(" 虚电路网络与数据报网络")]),v._v(" "),l("Markmap",{attrs:{id:"markmap_1a96284d",code:v.$dataBlock.markmap_1a96284d}}),l("ul",[l("li",[l("p",[v._v("数据报(datagram)网络与虚电路(virtual-circuit)网络是典型两类分组交换网络")])]),v._v(" "),l("li",[l("p",[v._v("数据报网络提供网络层无连接服务")])]),v._v(" "),l("li",[l("p",[v._v("虚电路网络提供网络层连接服务")])]),v._v(" "),l("li",[l("p",[v._v("类似于传输层的无连接服务（UDP）和面向连接服务（TCP），但是网络层服务：")]),v._v(" "),l("ul",[l("li",[v._v("主机到主机服务")]),v._v(" "),l("li",[v._v("网络核心实现")])])])]),v._v(" "),l("h2",{attrs:{id:"虚电路网络virtual-circuits"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路网络virtual-circuits"}},[v._v("#")]),v._v(" 虚电路网络(Virtual circuits)")]),v._v(" "),l("ul",[l("li",[v._v("虚电路：一条从源主机到目的主机，类似于电路的路径(逻辑连接)\n"),l("ul",[l("li",[v._v("分组交换\n"),l("ul",[l("li",[v._v("与电路交换的本质区别")])])]),v._v(" "),l("li",[v._v("每个分组的传输利用链路的全部带宽")]),v._v(" "),l("li",[v._v("源到目的路径经过的网络层设备共同完成虚电路功能")])])])]),v._v(" "),l("h3",{attrs:{id:"虚电路网络的通信过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路网络的通信过程"}},[v._v("#")]),v._v(" 虚电路网络的通信过程")]),v._v(" "),l("ul",[l("li",[v._v("通信过程\n"),l("ul",[l("li",[v._v("呼叫建立(call setup) → 数据传输 → 拆除呼叫")])])]),v._v(" "),l("li",[v._v("每个分组携带虚电路标识(VCID)，而不是目的主机地址")]),v._v(" "),l("li",[v._v("虚电路经过的每个网络设备（如路由器），维护每条经过它的虚电路连接状态")]),v._v(" "),l("li",[v._v("链路、网络设备资源(如带宽、缓存等)可以面向VC进行预分配\n"),l("ul",[l("li",[v._v("预分配资源=可预期服务性能")]),v._v(" "),l("li",[v._v("如 ATM 的电路仿真 (CBR)")])])])]),v._v(" "),l("h3",{attrs:{id:"虚电路网络的具体实现"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路网络的具体实现"}},[v._v("#")]),v._v(" 虚电路网络的具体实现")]),v._v(" "),l("div",{staticClass:"custom-block note"},[l("p",{staticClass:"custom-block-title"},[v._v("每条虚电路包括")]),v._v(" "),l("ol",[l("li",[v._v("从源主机到目的主机的一条路径")]),v._v(" "),l("li",[v._v("虚电路号（VCID）， 沿路每段链路一个编号")]),v._v(" "),l("li",[v._v("沿路每个网络层设备（如路由器），利用转发表记录经过的每条虚电路")])])]),v._v(" "),l("ul",[l("li",[v._v("沿某条虚电路传输的分组，携带对应虚电路的VCID，而不是目的地址")]),v._v(" "),l("li",[v._v("同一条VC ，在每段链路上的VCID通常不同\n"),l("ul",[l("li",[v._v("路由器转发分组时依据转发表改写/替换虚电路号")])])])]),v._v(" "),l("h3",{attrs:{id:"虚电路vc转发表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路vc转发表"}},[v._v("#")]),v._v(" 虚电路(VC)转发表")]),v._v(" "),l("h3",{attrs:{id:"虚电路信令协议"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#虚电路信令协议"}},[v._v("#")]),v._v(" 虚电路信令协议")]),v._v(" "),l("ul",[l("li",[v._v("用于VC的建立、维护与拆除\n"),l("ul",[l("li",[v._v("路径选择")])])]),v._v(" "),l("li",[v._v("应用于虚电路网络\n"),l("ul",[l("li",[v._v("如ATM、帧中继(frame-relay)网络等")])])]),v._v(" "),l("li",[v._v("目前的Internet不采用")])]),v._v(" "),l("h2",{attrs:{id:"数据报网络"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据报网络"}},[v._v("#")]),v._v(" 数据报网络")]),v._v(" "),l("ul",[l("li",[v._v("网络层无连接")]),v._v(" "),l("li",[v._v("每个分组携带目的地址")]),v._v(" "),l("li",[v._v("路由器根据分组的目的地址转发分组\n"),l("ul",[l("li",[v._v("基于路由协议/算法构建转发表")]),v._v(" "),l("li",[v._v("检索转发表")]),v._v(" "),l("li",[v._v("每个分组独立选路")])])])]),v._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210907085920-2021-09-07-08-59-20.png",alt:"20210907085920-2021-09-07-08-59-20"}})]),v._v(" "),l("h3",{attrs:{id:"数据报转发表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据报转发表"}},[v._v("#")]),v._v(" 数据报转发表")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("列表地址范围")]),v._v(" "),l("ul",[l("li",[v._v("聚合转发表入口")])])]),v._v(" "),l("li",[l("p",[v._v("最长前缀匹配优先")]),v._v(" "),l("ul",[l("li",[v._v("在检索转发表时，优先选择与分组目的地址匹配前缀最长的入口（entry）")])])])]),v._v(" "),l("h2",{attrs:{id:"数据报网络与-vc-网络的对比"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据报网络与-vc-网络的对比"}},[v._v("#")]),v._v(" 数据报网络与 VC 网络的对比")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("Internet (数据报网络)")]),v._v(" "),l("ul",[l("li",[v._v("计算机之间的数据交换\n"),l("ul",[l("li",[v._v('"弹性"服务，没有严格时间需求')])])]),v._v(" "),l("li",[v._v("链路类型众多\n"),l("ul",[l("li",[v._v("特点、性能各异")]),v._v(" "),l("li",[v._v("统一服务困难")])])]),v._v(" "),l("li",[v._v('"智能"端系统 (计算机)\n'),l("ul",[l("li",[v._v("可以自适应、性能控制、差错恢复")])])]),v._v(" "),l("li",[v._v('简化网络，复杂 "边缘"')])])]),v._v(" "),l("li",[l("p",[v._v("ATM(VC 网络)")]),v._v(" "),l("ul",[l("li",[v._v("电话网络演化而来")]),v._v(" "),l("li",[v._v("核心业务是实时对话\n"),l("ul",[l("li",[v._v("严格的时间、可靠性需求")]),v._v(" "),l("li",[v._v("需要有保障的服务")])])]),v._v(" "),l("li",[v._v("“哑(dumb)” 端系统（非智能）\n"),l("ul",[l("li",[v._v("电话机")]),v._v(" "),l("li",[v._v("传真机")])])]),v._v(" "),l("li",[v._v('简化"边缘"，复杂网络')])])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(a);_.default=a.exports}}]);