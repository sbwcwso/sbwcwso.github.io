(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{754:function(t,a,s){"use strict";s.r(a);var Q=s(12),r=function(t){t.options.__data__block__={markmap_1a962850:"- [有穷自动机](#有穷自动机)\n  - [有穷自动机(FA)的基本定义](#有穷自动机-fa-的基本定义)\n  - [FA 模型](#fa-模型)\n  - [FA 的表示: 转换图 (Transition Graph)](#fa-的表示-转换图-transition-graph)\n  - [FA定义（接收）的语言](#fa定义-接收-的语言)\n  - [最长子串匹配原则(Longest String Matching Principle)](#最长子串匹配原则-longest-string-matching-principle)"}},l=Object(Q.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"有穷自动机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有穷自动机"}},[t._v("#")]),t._v(" 有穷自动机")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("课件")]),t._v(" "),s("iframe",{attrs:{src:t.$withBase("/pdf/编译原理/第3讲%20词法分析.pdf"),width:"100%",height:"600"}})]),t._v(" "),s("Markmap",{attrs:{id:"markmap_1a962850",code:t.$dataBlock.markmap_1a962850}}),s("hr"),t._v(" "),s("h2",{attrs:{id:"有穷自动机fa的基本定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有穷自动机fa的基本定义"}},[t._v("#")]),t._v(" 有穷自动机(FA)的基本定义")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("有穷自动机 ( Finite Automata，FA )由两位神经物理学家 MeCuloch 和 Pitts 于1948年首先提出，是对一类"),s("mark",{staticClass:"c3"},[t._v("处理系统")]),t._v("建立的"),s("mark",{staticClass:"c3"},[t._v("数学模型")])])]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("FA 的定义")]),s("ul",[s("li",[t._v("这类系统具有一系列"),s("strong",[t._v("离散的输入输出信息")]),t._v("和"),s("strong",[t._v("有穷数目的内部状态")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("状态")]),t._v("：概括了对过去输入信息处理的状况")])])]),t._v(" "),s("li",[t._v("系统只需要根据"),s("strong",[t._v("当前所处的状态")]),t._v("和"),s("strong",[t._v("当前面临的输入信息")]),t._v("就可以决定系统的"),s("strong",[t._v("后继行为")]),t._v("。\n"),s("ul",[s("li",[t._v("每当系统处理了当前的输入后，系统的"),s("strong",[t._v("内部状态也将发生改变")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("FA 的典型例子: 电梯控制装置")]),t._v(" "),s("ul",[s("li",[t._v("输入：顾客的"),s("strong",[t._v("乘梯需求")]),t._v("（所要到达的层号）")]),t._v(" "),s("li",[t._v("状态：电梯所处的层数+运动方向")]),t._v(" "),s("li",[t._v("电梯控制装置"),s("strong",[t._v("并不需要记住先前全部的服务要求")]),t._v("，只需要知道"),s("strong",[t._v("电梯当前所处的状态")]),t._v("以及"),s("strong",[t._v("还没有满足的所有服务请求")])])])]),t._v(" "),s("h2",{attrs:{id:"fa-模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fa-模型"}},[t._v("#")]),t._v(" FA 模型")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("模型图示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/%E6%A8%A1%E5%9E%8B%E5%9B%BE%E7%A4%BA-2021-04-05-18-20-36.png",alt:"模型图示-2021-04-05-18-20-36"}})])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("输入带 (input tape)")]),t._v(" "),s("p",[t._v("用来存放输入符号串")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("读头(head)")]),t._v(" "),s("p",[t._v("从左向右逐个读取输入符号，不能修改（只读）、不能往返移动")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("有穷控制器( finite control )")]),t._v(" "),s("p",[t._v("具有有穷个状态数，根据"),s("strong",[t._v("当前的状态")]),t._v("和"),s("strong",[t._v("当前输入符号")]),t._v("控制转入"),s("strong",[t._v("下一状态")])])]),t._v(" "),s("h2",{attrs:{id:"fa-的表示-转换图-transition-graph"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fa-的表示-转换图-transition-graph"}},[t._v("#")]),t._v(" FA 的表示: 转换图 (Transition Graph)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("转换图")]),t._v(" "),s("ul",[s("li",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/%E5%9B%BE%E7%A4%BA-2021-04-05-18-24-40.png",alt:"图示-2021-04-05-18-24-40"}})])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("结点")]),t._v(" "),s("ul",[s("li",[t._v("表示 FA 的"),s("strong",[t._v("状态")])]),t._v(" "),s("li",[t._v("初始状态（开始状态）：只有一个，由"),s("strong",[t._v("start箭头")]),t._v("指向")]),t._v(" "),s("li",[t._v("终止状态（接收状态）：可以有多个，用"),s("strong",[t._v("双圈")]),t._v("表示")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("带标记的有向边")]),t._v(" "),s("p",[t._v("如果对于输入 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.023ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-23-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D44E","xlink:href":"#MJX-23-TEX-I-1D44E"}})])])])])]),t._v(" ，存在一个从状态 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.439ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.138ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 503 636","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-59-TEX-I-1D45D",d:"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D45D","xlink:href":"#MJX-59-TEX-I-1D45D"}})])])])])]),t._v(" 到状态 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.439ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.041ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 460 636","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-35-TEX-I-1D45E",d:"M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D45E","xlink:href":"#MJX-35-TEX-I-1D45E"}})])])])])]),t._v(" 的转换，就在 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.439ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.138ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 503 636","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-59-TEX-I-1D45D",d:"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D45D","xlink:href":"#MJX-59-TEX-I-1D45D"}})])])])])]),t._v(" 、 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.439ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.041ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 460 636","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-35-TEX-I-1D45E",d:"M33 157Q33 258 109 349T280 441Q340 441 372 389Q373 390 377 395T388 406T404 418Q438 442 450 442Q454 442 457 439T460 434Q460 425 391 149Q320 -135 320 -139Q320 -147 365 -148H390Q396 -156 396 -157T393 -175Q389 -188 383 -194H370Q339 -192 262 -192Q234 -192 211 -192T174 -192T157 -193Q143 -193 143 -185Q143 -182 145 -170Q149 -154 152 -151T172 -148Q220 -148 230 -141Q238 -136 258 -53T279 32Q279 33 272 29Q224 -10 172 -10Q117 -10 75 30T33 157ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D45E","xlink:href":"#MJX-35-TEX-I-1D45E"}})])])])])]),t._v(" 之间画一条有向边，并标记上 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.023ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.197ex",height:"1.02ex",role:"img",focusable:"false",viewBox:"0 -441 529 451","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-23-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D44E","xlink:href":"#MJX-23-TEX-I-1D44E"}})])])])])])],1)]),t._v(" "),s("h2",{attrs:{id:"fa定义（接收）的语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fa定义（接收）的语言"}},[t._v("#")]),t._v(" FA定义（接收）的语言")]),t._v(" "),s("ul",[s("li",[t._v("给定输入串 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-19-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D465","xlink:href":"#MJX-19-TEX-I-1D465"}})])])])])]),t._v(" ，如果存在一个对应于串 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-19-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D465","xlink:href":"#MJX-19-TEX-I-1D465"}})])])])])]),t._v(" 的从初始状态到某个终止状态的转换序列，则称串 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.025ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.294ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 572 453","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-19-TEX-I-1D465",d:"M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D465","xlink:href":"#MJX-19-TEX-I-1D465"}})])])])])]),t._v(" 被该 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.391ex",height:"1.62ex",role:"img",focusable:"false",viewBox:"0 -716 1499 716","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1418-TEX-I-1D439",d:"M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"}}),s("path",{attrs:{id:"MJX-1418-TEX-I-1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D439","xlink:href":"#MJX-1418-TEX-I-1D439"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(749,0)"}},[s("use",{attrs:{"data-c":"1D434","xlink:href":"#MJX-1418-TEX-I-1D434"}})])])])])]),t._v(" 接收")],1),t._v(" "),s("li",[t._v("由一个有穷自动机 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.378ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 1051 683","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-167-TEX-I-1D440",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D440","xlink:href":"#MJX-167-TEX-I-1D440"}})])])])])]),t._v(" 接收的所有串构成的集合称为是该 "),s("strong",[t._v("FA 定义（或接收）的语言")]),t._v("，记为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"5.679ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2510 1000","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1419-TEX-I-1D43F",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}}),s("path",{attrs:{id:"MJX-1419-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}}),s("path",{attrs:{id:"MJX-1419-TEX-I-1D440",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}}),s("path",{attrs:{id:"MJX-1419-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D43F","xlink:href":"#MJX-1419-TEX-I-1D43F"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(681,0)"}},[s("use",{attrs:{"data-c":"28","xlink:href":"#MJX-1419-TEX-N-28"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(1070,0)"}},[s("use",{attrs:{"data-c":"1D440","xlink:href":"#MJX-1419-TEX-I-1D440"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(2121,0)"}},[s("use",{attrs:{"data-c":"29","xlink:href":"#MJX-1419-TEX-N-29"}})])])])])])],1)]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("示例")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20210405190415-2021-04-05-19-04-15.png",alt:"20210405190415-2021-04-05-19-04-15"}})])]),t._v(" "),s("h2",{attrs:{id:"最长子串匹配原则longest-string-matching-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最长子串匹配原则longest-string-matching-principle"}},[t._v("#")]),t._v(" 最长子串匹配原则(Longest String Matching Principle)")]),t._v(" "),s("ul",[s("li",[t._v("当输入串的"),s("strong",[t._v("多个前缀")]),t._v("与一个或多个模式匹配时，总是选择"),s("strong",[t._v("最长的前缀")]),t._v("进行匹配")]),t._v(" "),s("li",[t._v("在到达某个终态之后，只要输入带上还有符号，DFA 就继续前进，以便"),s("strong",[t._v("寻找尽可能长的匹配")])])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(l);a.default=l.exports}}]);