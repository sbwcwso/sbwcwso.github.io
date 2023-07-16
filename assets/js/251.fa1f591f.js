(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{803:function(t,s,l){"use strict";l.r(s);var v=l(12),i=function(t){t.options.__data__block__={markmap_382ee14a:"- [计算机网络的体系结构](#计算机网络的体系结构)\n  - [分层结构](#分层结构)\n    - [复杂网络的分层结构](#复杂网络的分层结构)\n    - [分层网络体系结构](#分层网络体系结构)\n      - [采用分层结构的原因](#采用分层结构的原因)\n      - [分层网络体系结构的基本概念](#分层网络体系结构的基本概念)\n  - [OSI 参考模型](#osi-参考模型)\n      - [OSI 参考模型解释的通信过程](#osi-参考模型解释的通信过程)\n    - [七层结构](#七层结构)\n      - [物理层](#物理层)\n      - [数据链路层](#数据链路层)\n      - [网络层](#网络层)\n      - [传输层](#传输层)\n      - [会话层](#会话层)\n      - [表示层](#表示层)\n      - [应用层](#应用层)\n  - [TCP-IP参考模型](#tcp-ip参考模型)\n  - [五层参考模型](#五层参考模型)"}},a=Object(v.a)({},(function(){var t=this,s=t.$createElement,l=t._self._c||s;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"计算机网络的体系结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络的体系结构"}},[t._v("#")]),t._v(" 计算机网络的体系结构")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("公开课地址")]),t._v(" "),l("iframe",{attrs:{width:"100%",height:"600",src:"//player.bilibili.com/player.html?aid=23555433&bvid=BV1Up411Z7hC&cid=39314378&page=13",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),l("iframe",{attrs:{width:"100%",height:"600",src:"//player.bilibili.com/player.html?aid=23555433&bvid=BV1Up411Z7hC&cid=39314379&page=14",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}}),t._v(" "),l("iframe",{attrs:{width:"100%",height:"600",src:"//player.bilibili.com/player.html?aid=23555433&bvid=BV1Up411Z7hC&cid=39314380&page=15",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}})]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("课件")]),t._v(" "),l("iframe",{attrs:{src:t.$withBase("/pdf/计算机网络/L09计算机网络体系结构.pdf"),width:"100%",height:"600"}}),t._v(" "),l("iframe",{attrs:{src:t.$withBase("/pdf/计算机网络/L10OSI与Internet参考模型-01.pdf"),width:"100%",height:"600"}}),t._v(" "),l("iframe",{attrs:{src:t.$withBase("/pdf/计算机网络/L10OSI与Internet参考模型-02.pdf"),width:"100%",height:"600"}}),t._v(" "),l("iframe",{attrs:{src:t.$withBase("/pdf/计算机网络/L10OSI与Internet参考模型-03.pdf"),width:"100%",height:"600"}})]),t._v(" "),l("Markmap",{attrs:{id:"markmap_382ee14a",code:t.$dataBlock.markmap_382ee14a}}),l("hr"),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("网络体系结构是从**功能上**描述计算机网络结构")])]),t._v(" "),l("ul",[l("li",[t._v("分层结构")]),t._v(" "),l("li",[t._v("每层遵循某个/些网络协议完成本层功能")]),t._v(" "),l("li",[t._v("体系结构是抽象的")])]),t._v(" "),l("h2",{attrs:{id:"分层结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分层结构"}},[t._v("#")]),t._v(" 分层结构")]),t._v(" "),l("h3",{attrs:{id:"复杂网络的分层结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#复杂网络的分层结构"}},[t._v("#")]),t._v(" 复杂网络的分层结构")]),t._v(" "),l("ul",[l("li",[t._v("每层完成一种（类）特定服务/功能\n"),l("ul",[l("li",[t._v("每层依赖底层提供的服务")]),t._v(" "),l("li",[t._v("通过层内动作完成相应功能\n"),l("ul",[l("li",[t._v("可能会向上一层提供所需的服务")])])])])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("类比：航空旅行")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210725040032-2021-07-25-04-00-32.png",alt:"20210725040032-2021-07-25-04-00-32"}})])]),t._v(" "),l("h3",{attrs:{id:"分层网络体系结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分层网络体系结构"}},[t._v("#")]),t._v(" 分层网络体系结构")]),t._v(" "),l("div",{staticClass:"custom-block note"},[l("p",{staticClass:"custom-block-title"},[t._v("计算机网络的体系结构")]),t._v(" "),l("ul",[l("li",[t._v("计算机网络体系结构简称网络体系结构(network architecture)是"),l("strong",[t._v("分层结构")])]),t._v(" "),l("li",[t._v("每层遵循某个/些"),l("strong",[t._v("网络协议")]),t._v("完成本层功能")]),t._v(" "),l("li",[t._v("计算机网络体系结构是计算机网络的"),l("strong",[t._v("各层及其协议的集合")])]),t._v(" "),l("li",[t._v("体系结构是一个计算机网络的功能层次及其关系的定义")]),t._v(" "),l("li",[t._v("体系结构是"),l("strong",[t._v("抽象的")])])])]),t._v(" "),l("h4",{attrs:{id:"采用分层结构的原因"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#采用分层结构的原因"}},[t._v("#")]),t._v(" 采用分层结构的原因")]),t._v(" "),l("div",{staticClass:"custom-block note"},[l("p",{staticClass:"custom-block-title"},[t._v("优点")]),t._v(" "),l("ul",[l("li",[t._v("结构清晰，有利于识别复杂系统的部件及其关系")]),t._v(" "),l("li",[t._v("模块化的分层易于系统更新、维护\n"),l("ul",[l("li",[t._v("任何一层服务实现的改变对于系统其它层都是透明的\n"),l("ul",[l("li",[t._v("例如，登机过程的改变并不影响航空系统的其它部分（层）")])])])])]),t._v(" "),l("li",[t._v("有利于标准化")])])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("缺点")]),t._v(" "),l("ul",[l("li",[t._v("系统效率低\n"),l("ul",[l("li",[t._v("可类比于行政机构的审批流程，层数越多，则审批流程越长")])])])])]),t._v(" "),l("h4",{attrs:{id:"分层网络体系结构的基本概念"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#分层网络体系结构的基本概念"}},[t._v("#")]),t._v(" 分层网络体系结构的基本概念")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210726072318-2021-07-26-07-23-18.png",alt:"20210726072318-2021-07-26-07-23-18"}})])]),t._v(" "),l("ul",[l("li",[t._v("实体: 表示任何可发送或接收信息的硬件或软件进程")]),t._v(" "),l("li",[t._v("协议:是控制两个对等实体(同层之间)进行通信的规则的集合，协议是"),l("strong",[t._v("水平的")])]),t._v(" "),l("li",[t._v("任一层实体需要使用下层服务，遵循本层协议，实现本层功能，向上层提供服务, 服务是"),l("strong",[t._v("垂直")]),t._v("的")]),t._v(" "),l("li",[t._v("下层协议的实现对上层的服务用户是"),l("strong",[t._v("透明的")])]),t._v(" "),l("li",[t._v("同系统的相邻层实体间通过"),l("strong",[t._v("接口")]),t._v("进行交互\n"),l("ul",[l("li",[t._v("通过"),l("strong",[t._v("服务访问点")]),t._v(" SAP (Service Access Point)，交换"),l("strong",[t._v("原语")]),t._v("，指定请求的特定服务")])])])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("原语")]),t._v(" "),l("p",[t._v("原语分为四类：")]),t._v(" "),l("ol",[l("li",[t._v("请求（Req）型原语，用于高层向低层请求某种业务；")]),t._v(" "),l("li",[t._v("证实（Cfm）型原语，用于提供业务的层证实某个动作已经完成；")]),t._v(" "),l("li",[t._v("指示（Ind）型原语，用于提供业务的层向高层报告一个与特定业务相关的动作；")]),t._v(" "),l("li",[t._v("响应(Res)型原语，用于应答，表示来自高层的指示原语已收到")])])]),t._v(" "),l("h2",{attrs:{id:"osi-参考模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#osi-参考模型"}},[t._v("#")]),t._v(" OSI 参考模型")]),t._v(" "),l("ul",[l("li",[t._v("开放系统互连 (OSI)参考模型是由国际标准化组织 (ISO)于1984年提出的分层网络体系结构模型\n"),l("ul",[l("li",[t._v("目的是支持"),l("strong",[t._v("异构网络系统")]),t._v("的互联互通")]),t._v(" "),l("li",[t._v("异构网络系统互连的"),l("strong",[t._v("国际标准")])]),t._v(" "),l("li",[t._v("理解网络通信的最佳"),l("strong",[t._v("学习工具")]),t._v("（理论模型）\n"),l("ul",[l("li",[t._v("理论成功，市场失败")])])])])]),t._v(" "),l("li",[l("strong",[t._v("7层")]),t._v("（功能）,每层完成特定的网络功能")])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724124125-2021-07-24-12-41-25.png",alt:"20210724124125-2021-07-24-12-41-25"}})])]),t._v(" "),l("h4",{attrs:{id:"osi-参考模型解释的通信过程"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#osi-参考模型解释的通信过程"}},[t._v("#")]),t._v(" OSI 参考模型解释的通信过程")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("通信过程示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724124231-2021-07-24-12-42-31.png",alt:"20210724124231-2021-07-24-12-42-31"}})])]),t._v(" "),l("ul",[l("li",[t._v("路由器完成三层功能\n"),l("ul",[l("li",[t._v("另外四个层称为端-端层，相当于两层之间直接进行通信")])])]),t._v(" "),l("li",[t._v("PDU 协议数据单元")]),t._v(" "),l("li",[t._v("协议规定的是在相同层之间交换数据")])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("通信过程中的数据封装示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724125009-2021-07-24-12-50-09.png",alt:"20210724125009-2021-07-24-12-50-09"}})])]),t._v(" "),l("ul",[l("li",[t._v("从上到下，数据逐层封装\n"),l("ul",[l("li",[t._v("增加"),l("strong",[t._v("控制信息")])]),t._v(" "),l("li",[t._v("构造协议数据单元(PDU)")])])]),t._v(" "),l("li",[t._v("控制信息主要包括:\n"),l("ul",[l("li",[t._v("地址（Address）: 标识发送端/接收端")]),t._v(" "),l("li",[t._v("差错检测编码（Error-detecting code）: 用于差错检测或纠正")]),t._v(" "),l("li",[t._v("协议控制（Protocol control）: 实现协议功能的附加信息，如: 优先级（priority）、服务质量（QoS）、 和安全控制等")])])])]),t._v(" "),l("h3",{attrs:{id:"七层结构"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#七层结构"}},[t._v("#")]),t._v(" 七层结构")]),t._v(" "),l("h4",{attrs:{id:"物理层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724125755-2021-07-24-12-57-55.png",alt:"20210724125755-2021-07-24-12-57-55"}})])]),t._v(" "),l("ul",[l("li",[t._v("接口特性\n"),l("ul",[l("li",[t._v("机械特性、电气特性、功能特性、规程特性")])])]),t._v(" "),l("li",[t._v("比特编码")]),t._v(" "),l("li",[t._v("数据率")]),t._v(" "),l("li",[t._v("比特同步\n"),l("ul",[l("li",[t._v("时钟同步")])])]),t._v(" "),l("li",[t._v("传输模式\n"),l("ul",[l("li",[t._v("单工（Simplex）\n"),l("ul",[l("li",[t._v("电视")])])]),t._v(" "),l("li",[t._v("半双工（half-duplex）\n"),l("ul",[l("li",[t._v("对讲机，发和收不能同时进行")])])]),t._v(" "),l("li",[t._v("全双工（full-duplex）")])])])]),t._v(" "),l("h4",{attrs:{id:"数据链路层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724130430-2021-07-24-13-04-30.png",alt:"20210724130430-2021-07-24-13-04-30"}})])]),t._v(" "),l("ul",[l("li",[t._v("负责结点-结点（node-to-node）数据传输\n"),l("ul",[l("li",[t._v("以帧为单位进行数据传输")])])]),t._v(" "),l("li",[t._v("组帧（Framing）\n"),l("ul",[l("li",[t._v("让接收一端能成功的切分数据帧，并区分头部和尾部信息")])])]),t._v(" "),l("li",[t._v("物理寻址（Physical addressing）\n"),l("ul",[l("li",[t._v("在物理层无法实现")]),t._v(" "),l("li",[t._v("在帧头中增加发送端和/或接收端的"),l("strong",[t._v("物理地址")]),t._v("标识数据帧的发送端和/或接收端"),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724130838-2021-07-24-13-08-38.png",alt:"20210724130838-2021-07-24-13-08-38"}})])])])])]),t._v(" "),l("li",[t._v("流量控制（Flow control）\n"),l("ul",[l("li",[t._v("避免淹没接收端\n"),l("ul",[l("li",[t._v("让发送端和接收端的速度要进行匹配")])])])])]),t._v(" "),l("li",[t._v("差错控制（Error control）\n"),l("ul",[l("li",[t._v("检测并重传损坏或丢失帧，并避免重复帧")])])]),t._v(" "),l("li",[t._v("访问(接入)控制（Access control）\n"),l("ul",[l("li",[t._v("在任一给定时刻决定哪个设备拥有链路（物理介质）控制使用权")])])])]),t._v(" "),l("h4",{attrs:{id:"网络层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724131358-2021-07-24-13-13-58.png",alt:"20210724131358-2021-07-24-13-13-58"}})]),t._v(" "),l("ul",[l("li",[t._v("负责"),l("strong",[t._v("源主机")]),t._v("到"),l("strong",[t._v("目的主机")]),t._v("数据分组（packet）交付\n"),l("ul",[l("li",[t._v("可能穿越多个网络")])])]),t._v(" "),l("li",[l("strong",[t._v("逻辑寻址")]),t._v("（Logical addressing）\n"),l("ul",[l("li",[t._v("全局唯一逻辑地址，确保数据分组被送达目的主机，如IP地址")])])]),t._v(" "),l("li",[l("strong",[t._v("路由")]),t._v("（Routing）\n"),l("ul",[l("li",[t._v("路由器(或网关)互连网络，并路由分组至最终目的主机")])])]),t._v(" "),l("li",[l("strong",[t._v("分组转发")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("路由及分组转发示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724131740-2021-07-24-13-17-40.png",alt:"20210724131740-2021-07-24-13-17-40"}})])]),t._v(" "),l("h4",{attrs:{id:"传输层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("传输层图示")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210724131916-2021-07-24-13-19-16.png",alt:"20210724131916-2021-07-24-13-19-16"}})])]),t._v(" "),l("ul",[l("li",[t._v("负责源-目的（端-端） （进程间） 完整报文传输")]),t._v(" "),l("li",[t._v("分段与重组\n"),l("ul",[l("li",[t._v("SAP寻址\n"),l("ul",[l("li",[t._v("确保将完整报文提交给正确进程，如端口号")])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("传输示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210727102804-2021-07-27-10-28-04.png",alt:"20210727102804-2021-07-27-10-28-04"}})])])])])]),t._v(" "),l("li",[t._v("连接控制\n"),l("ul",[l("li",[t._v("端到端的连接控制")]),t._v(" "),l("li",[t._v("逻辑连接的控制")])])]),t._v(" "),l("li",[t._v("流量控制")]),t._v(" "),l("li",[t._v("差错控制")])]),t._v(" "),l("h4",{attrs:{id:"会话层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#会话层"}},[t._v("#")]),t._v(" 会话层")]),t._v(" "),l("ul",[l("li",[t._v("对话控制（dialog controlling）\n"),l("ul",[l("li",[t._v("建立、维护、拆除")])])]),t._v(" "),l("li",[t._v("同步(synchronization)\n"),l("ul",[l("li",[t._v("在数据流中插入“同步点”")])])]),t._v(" "),l("li",[t._v("最“"),l("strong",[t._v("薄")]),t._v("”的一层\n"),l("ul",[l("li",[t._v("功能较少")]),t._v(" "),l("li",[t._v("实际中不单独存在")])])])]),t._v(" "),l("h4",{attrs:{id:"表示层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#表示层"}},[t._v("#")]),t._v(" 表示层")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("处理两个系统间交换信息的语法与语义（syntax and semantics ）问题")])]),t._v(" "),l("li",[l("p",[t._v("数据表示转化")]),t._v(" "),l("ul",[l("li",[t._v("转换为主机独立的编码")])])]),t._v(" "),l("li",[l("p",[t._v("加密/解密")])]),t._v(" "),l("li",[l("p",[t._v("压缩/解压缩")])])]),t._v(" "),l("h4",{attrs:{id:"应用层"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),l("p",[t._v("最丰富的一层")]),t._v(" "),l("ul",[l("li",[t._v("支持用户通过用户代理（如浏览器）或网络接口使用网络（服务）")]),t._v(" "),l("li",[t._v("典型应用层服务：\n"),l("ul",[l("li",[t._v("文件传输（FTP）")]),t._v(" "),l("li",[t._v("电子邮件（SMTP）")]),t._v(" "),l("li",[t._v("Web（HTTP）")]),t._v(" "),l("li",[l("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[l("svg",{staticStyle:{"vertical-align":"0.43ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.652ex",height:"0.271ex",role:"img",focusable:"false",viewBox:"0 -310 1172 120","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[l("defs",[l("path",{attrs:{id:"MJX-423-TEX-N-22EF",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250ZM525 250Q525 274 542 292T585 310Q609 310 627 294T646 251Q646 226 629 208T586 190T543 207T525 250ZM972 250Q972 274 989 292T1032 310Q1056 310 1074 294T1093 251Q1093 226 1076 208T1033 190T990 207T972 250Z"}})]),l("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[l("g",{attrs:{"data-mml-node":"math"}},[l("g",{attrs:{"data-mml-node":"mo"}},[l("use",{attrs:{"data-c":"22EF","xlink:href":"#MJX-423-TEX-N-22EF"}})])])])])])],1)])])]),t._v(" "),l("h2",{attrs:{id:"tcp-ip参考模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip参考模型"}},[t._v("#")]),t._v(" TCP-IP参考模型")]),t._v(" "),l("ul",[l("li",[t._v("先有协议，后整理出参考模型")])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("TCP/IP 参考模型示意图")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210727104103-2021-07-27-10-41-03.png",alt:"20210727104103-2021-07-27-10-41-03"}})])]),t._v(" "),l("h2",{attrs:{id:"五层参考模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#五层参考模型"}},[t._v("#")]),t._v(" 五层参考模型")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("综合 OSI 和 TCP/IP 的优点")])]),t._v(" "),l("li",[l("p",[t._v("应用层 : 支持各种网络应用")]),t._v(" "),l("ul",[l("li",[t._v("FTP, SMTP, HTTP")])])]),t._v(" "),l("li",[l("p",[t._v("传输层 : 进程-进程的数据传输")]),t._v(" "),l("ul",[l("li",[t._v("TCP, UDP")])])]),t._v(" "),l("li",[l("p",[t._v("网络层 : 源主机到目的主机的数据分组路由与转发")]),t._v(" "),l("ul",[l("li",[t._v("IP协议、路由协议等")])])]),t._v(" "),l("li",[l("p",[t._v("链路层 : 相邻网络元素（主机、交换机、路由器等）的数据传输")]),t._v(" "),l("ul",[l("li",[t._v("以太网（Ethernet）、802.11 (WiFi)、PPP")])])]),t._v(" "),l("li",[l("p",[t._v("物理层 :比特传输")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("五层模型的数据封装")]),t._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210727104630-2021-07-27-10-46-30.png",alt:"20210727104630-2021-07-27-10-46-30"}})]),t._v(" "),l("ul",[l("li",[t._v("交换机只实现两层")]),t._v(" "),l("li",[t._v("报文 段 数据报 帧")])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(a);s.default=a.exports}}]);