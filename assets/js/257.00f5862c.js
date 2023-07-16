(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{806:function(t,s,a){"use strict";a.r(s);var l=a(12),i=function(t){t.options.__data__block__={markmap_1a96284d:"- [Email应用](#email应用)\n  - [Email 应用的构成](#email-应用的构成)\n    - [邮件客户端](#邮件客户端)\n    - [邮件服务器](#邮件服务器)\n    - [SMTP协议](#smtp协议)\n  - [Email 应用示例](#email-应用示例)\n    - [尝试与 SMTP 交互](#尝试与-smtp-交互)\n  - [Email 消息格式](#email-消息格式)\n    - [多媒体扩展](#多媒体扩展)\n  - [邮件访问协议](#邮件访问协议)\n    - [POP 协议](#pop-协议)\n    - [IMAP协议](#imap协议)"}},v=Object(l.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"email应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email应用"}},[t._v("#")]),t._v(" Email应用")]),t._v(" "),a("Markmap",{attrs:{id:"markmap_1a96284d",code:t.$dataBlock.markmap_1a96284d}}),a("h2",{attrs:{id:"email-应用的构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-应用的构成"}},[t._v("#")]),t._v(" Email 应用的构成")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Email应用的构成组件")]),t._v(" "),a("ul",[a("li",[t._v("邮件客户端(user agent)useragent")]),t._v(" "),a("li",[t._v("邮件服务器")]),t._v(" "),a("li",[t._v("SMTP协议(Simple Mail Transfer Protocol)")])])]),t._v(" "),a("h3",{attrs:{id:"邮件客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件客户端"}},[t._v("#")]),t._v(" 邮件客户端")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("邮件客户端的作用")]),t._v(" "),a("ul",[a("li",[t._v("读、写Email消息")]),t._v(" "),a("li",[t._v("与服务器交互，收、发Email消息")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("常见的客户端")]),t._v(" "),a("ul",[a("li",[t._v("Outlook, Foxmail, Thunderbird")]),t._v(" "),a("li",[t._v("Web客户端")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("客户端示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816093212-2021-08-16-09-32-12.png",alt:"20210816093212-2021-08-16-09-32-12"}})])]),t._v(" "),a("h3",{attrs:{id:"邮件服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件服务器"}},[t._v("#")]),t._v(" 邮件服务器")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("邮件服务器的作用")]),t._v(" "),a("ul",[a("li",[t._v("邮箱：存储发给该用户的Email")]),t._v(" "),a("li",[t._v("消息队列(message queue)：存储等待发送的Email")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("邮件服务器示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816093249-2021-08-16-09-32-49.png",alt:"20210816093249-2021-08-16-09-32-49"}})])]),t._v(" "),a("h3",{attrs:{id:"smtp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp协议"}},[t._v("#")]),t._v(" SMTP协议")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("SMTP 协议：邮件服务器之间传递消息所使用的协议")]),a("ul",[a("li",[t._v("客户端：发送消息的服务器")]),t._v(" "),a("li",[t._v("服务器：接收消息的服务器")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("特点")]),t._v(" "),a("ul",[a("li",[t._v("使用TCP进行email消息的可靠传输")]),t._v(" "),a("li",[t._v("使用持久性连接")]),t._v(" "),a("li",[t._v("端口25")]),t._v(" "),a("li",[t._v("传输过程的三个阶段\n"),a("ul",[a("li",[t._v("握手")]),t._v(" "),a("li",[t._v("消息的传输")]),t._v(" "),a("li",[t._v("关闭")])])]),t._v(" "),a("li",[t._v("命令/响应交互模式\n"),a("ul",[a("li",[t._v("命令(command): ASCII文本")]),t._v(" "),a("li",[t._v("响应(response): 状态代码和语句")])])]),t._v(" "),a("li",[t._v("Email消息只能包含7位ASCII码")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("与 HTTP 对比")]),t._v(" "),a("ul",[a("li",[t._v("HTTP: 拉式(pull)")]),t._v(" "),a("li",[t._v("SMTP: 推式(push)")]),t._v(" "),a("li",[t._v("都使用命令/响应交互模式")]),t._v(" "),a("li",[t._v("命令和状态代码都是ASCII码")]),t._v(" "),a("li",[t._v("HTTP: 每个对象封装在独立的响应消息中")]),t._v(" "),a("li",[t._v("SMTP: 多个对象在由多个部分构成的消息中发送")])])]),t._v(" "),a("h2",{attrs:{id:"email-应用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-应用示例"}},[t._v("#")]),t._v(" Email 应用示例")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("应用示例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816092749-2021-08-16-09-27-49.png",alt:"20210816092749-2021-08-16-09-27-49"}})]),t._v(" "),a("ul",[a("li",[t._v("异步应用")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("SMTP 交互示例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816092850-2021-08-16-09-28-51.png",alt:"20210816092850-2021-08-16-09-28-51"}})])]),t._v(" "),a("h3",{attrs:{id:"尝试与-smtp-交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尝试与-smtp-交互"}},[t._v("#")]),t._v(" 尝试与 SMTP 交互")]),t._v(" "),a("h2",{attrs:{id:"email-消息格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-消息格式"}},[t._v("#")]),t._v(" Email 消息格式")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("SMTP：email消息的传输/交换协议")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("RFC 822：文本消息格式标准")]),t._v(" "),a("ul",[a("li",[t._v("头部行(header)  -- 与 SMTP 命令不同\n"),a("ul",[a("li",[t._v("To")]),t._v(" "),a("li",[t._v("From")]),t._v(" "),a("li",[t._v("Subject")])])]),t._v(" "),a("li",[t._v("消息体(body)\n"),a("ul",[a("li",[t._v("消息本身")]),t._v(" "),a("li",[t._v("只能是 ASCII 字符")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816093931-2021-08-16-09-39-31.png",alt:"20210816093931-2021-08-16-09-39-31"}})])])]),t._v(" "),a("h3",{attrs:{id:"多媒体扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多媒体扩展"}},[t._v("#")]),t._v(" 多媒体扩展")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("MIME：多媒体邮件扩展 RFC 2045, 2056")]),t._v(" "),a("ul",[a("li",[t._v("通过在邮件头部增加额外的行以声明MIME的内容类型")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816094058-2021-08-16-09-40-58.png",alt:"20210816094058-2021-08-16-09-40-58"}})])])]),t._v(" "),a("h2",{attrs:{id:"邮件访问协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件访问协议"}},[t._v("#")]),t._v(" 邮件访问协议")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("示意图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816094455-2021-08-16-09-44-55.png",alt:"20210816094455-2021-08-16-09-44-55"}})])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("邮件访问协议：从服务器获取邮件")]),t._v(" "),a("ul",[a("li",[t._v("POP: Post Office Protocol [RFC 1939]\n"),a("ul",[a("li",[t._v("认证/授权(客户端 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[a("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.262ex",height:"1.509ex",role:"img",focusable:"false",viewBox:"0 -667 1000 667","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs",[a("path",{attrs:{id:"MJX-1797-TEX-N-21C4",d:"M943 500Q895 471 856 427T801 333H778Q755 333 755 334Q755 336 762 353T791 406T841 472L848 480H459Q70 480 67 482Q55 488 55 500T67 518Q70 520 459 520H848L841 528Q813 559 792 594T763 646T755 666Q755 667 778 667H801Q817 617 856 573T943 500ZM56 167Q102 194 141 238T198 333H221Q244 333 244 332Q221 265 161 198L151 187H539Q928 187 930 186Q944 182 944 167Q944 155 934 149Q930 147 541 147H151L160 137Q185 110 205 77T235 24T244 1Q244 0 221 0H199Q158 106 56 167Z"}})]),a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mo"}},[a("use",{attrs:{"data-c":"21C4","xlink:href":"#MJX-1797-TEX-N-21C4"}})])])])])]),t._v(" 服务器)")],1),t._v(" "),a("li",[t._v("下载")])])]),t._v(" "),a("li",[t._v("IMAP: Internet Mail Access Protocol [RFC 1730]\n"),a("ul",[a("li",[t._v("更多功能")]),t._v(" "),a("li",[t._v("更加复杂")]),t._v(" "),a("li",[t._v("能够操纵服务器上存储的消息")])])]),t._v(" "),a("li",[t._v("HTTP：163, QQ Mail等")])])]),t._v(" "),a("h3",{attrs:{id:"pop-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pop-协议"}},[t._v("#")]),t._v(" POP 协议")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("认证过程")]),t._v(" "),a("ul",[a("li",[t._v("客户端命令\n"),a("ul",[a("li",[t._v("User：声明用户名")]),t._v(" "),a("li",[t._v("Pass: 声明密码")])])]),t._v(" "),a("li",[t._v("服务器响应\n"),a("ul",[a("li",[t._v("+OK")]),t._v(" "),a("li",[t._v("-ERR")])])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("示例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816095137-2021-08-16-09-51-37.png",alt:"20210816095137-2021-08-16-09-51-37"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("事务阶段")]),t._v(" "),a("ul",[a("li",[t._v("List：列出消息数量")]),t._v(" "),a("li",[t._v("Retr：用编号获取消息")]),t._v(" "),a("li",[t._v("Dele: 删除消息")]),t._v(" "),a("li",[t._v("Quit")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("示例")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210816095203-2021-08-16-09-52-03.png",alt:"20210816095203-2021-08-16-09-52-03"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("不同的模式")]),t._v(" "),a("ul",[a("li",[t._v("“下载并删除”模式\n"),a("ul",[a("li",[t._v("用户如果换了客户端软件，无法重读该邮件")])])]),t._v(" "),a("li",[t._v("“下载并保持”模式\n"),a("ul",[a("li",[t._v("不同客户端都可以保留消息的拷贝")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("POP3 是无状态的")])]),t._v(" "),a("h3",{attrs:{id:"imap协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imap协议"}},[t._v("#")]),t._v(" IMAP协议")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("特点")]),t._v(" "),a("ul",[a("li",[t._v("所有消息统一保存在一个地方：服务器")]),t._v(" "),a("li",[t._v("允许用户利用文件夹组织消息")]),t._v(" "),a("li",[t._v("IMAP支持跨会话(Session)的用户状态:\n"),a("ul",[a("li",[t._v("文件夹的名字")]),t._v(" "),a("li",[t._v("文件夹与消息ID之间的映射等")])])])])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(v);s.default=v.exports}}]);