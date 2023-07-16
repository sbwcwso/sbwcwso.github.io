(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{904:function(t,a,s){"use strict";s.r(a);var l=s(12),i=Object(l.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第-5-章-优化程序性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-5-章-优化程序性能"}},[t._v("#")]),t._v(" 第 5 章 优化程序性能")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("编写高效程序的要点")]),t._v(" "),s("ul",[s("li",[t._v("必须选择一组适当的算法和数据结构")]),t._v(" "),s("li",[t._v("必须编写出编译器能够有效优化以转换成高效可执行代码的源代码")]),t._v(" "),s("li",[t._v("针对运算量特别大的计数, 将一个任务分成多个部分\n"),s("ul",[s("li",[t._v("以让这些部分可以在多核和多处理器的某种组合上并行的计算")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("程序优化的步骤")]),t._v(" "),s("ul",[s("li",[t._v("消除不必要的工作\n"),s("ul",[s("li",[t._v("消除不必要的函数调用、条件测试和内存引用")])])]),t._v(" "),s("li",[t._v("利用处理器提供的"),s("strong",[t._v("指令级并行")]),t._v("(instruction-level parallelism) 能力, 同时执行多条指令\n"),s("ul",[s("li",[t._v("前提是理解处理器的运作特性")])])])])]),t._v(" "),s("h2",{attrs:{id:"51-优化编译器的能力和局限性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#51-优化编译器的能力和局限性"}},[t._v("#")]),t._v(" 5.1 优化编译器的能力和局限性")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("编译器必须很小心地对程序只使用"),s("b",[t._v("安全")]),t._v("的优化")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[s("b",[t._v("内存别名使用")]),t._v(" (memory aliasing)")]),t._v(" "),s("ul",[s("li",[t._v("指的是两个指针可能指向同一个内存的情况")]),t._v(" "),s("li",[t._v("这种情况会限制编译器可能的优化策略")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("函数的调用可能存在副作用")]),t._v(" "),s("ul",[s("li",[t._v("为了安全, 编译器会保持所有的函数调用不变")]),t._v(" "),s("li",[t._v("内联函数替换(inline substitution)\n"),s("ul",[s("li",[t._v("其会将函数的调用替换为函数体\n"),s("ul",[s("li",[t._v("如此即减少了函数调用的开销, 也允许对展开的代码做进一步的优化")])])]),t._v(" "),s("li",[s("code",[t._v("gcc")]),t._v(" 的最近版本在使用命令行选项 "),s("code",[t._v("-finline")]),t._v(" 或者使用高于 "),s("code",[t._v("-O1")]),t._v(" 的优化等级时\n"),s("ul",[s("li",[t._v("会尝试在"),s("strong",[t._v("单个文件")]),t._v("中定义的函数的内联")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"52-表示程序性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#52-表示程序性能"}},[t._v("#")]),t._v(" 5.2 表示程序性能")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("每元素周期数(CPE)")]),t._v(" "),s("ul",[s("li",[t._v("Cycles Per Element")]),t._v(" "),s("li",[t._v("教材中引入的表示程序性能的方法")]),t._v(" "),s("li",[t._v("元素是指数组元素")])])]),t._v(" "),s("h2",{attrs:{id:"53-程序示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#53-程序示例"}},[t._v("#")]),t._v(" 5.3 程序示例")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("示例程序: 计算数组中所有元素的累加或累积")]),t._v(" "),s("ul",[s("li",[t._v("边界检查降低了程序出错的机会, 但是它也会减缓程序的执行")]),t._v(" "),s("li",[t._v("确定变换组合的最好方法是实验加上分析\n"),s("ul",[s("li",[t._v("反复尝试不同的方法, 进行测量")]),t._v(" "),s("li",[t._v("并检查汇编代码表示以确定底层的性能瓶颈")])])])])]),t._v(" "),s("h2",{attrs:{id:"54-消除循环的低效率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#54-消除循环的低效率"}},[t._v("#")]),t._v(" 5.4 消除循环的低效率")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("代码移动(code motion)")]),t._v(" "),s("ul",[s("li",[t._v("识别要执行多次但是计算结果不会改变的计算\n"),s("ul",[s("li",[t._v("并将这些计算移到到代码前面不会被多次求值的部分")])])]),t._v(" "),s("li",[t._v("优化编译器会尝试进行代码移动\n"),s("ul",[s("li",[t._v("但是它们不能可靠的发现一个函数是否有副作用, 因而假设函数有副作用")]),t._v(" "),s("li",[t._v("为了改进代码, 程序员必须经常帮助编译器显式的完成代码移动")])])])])]),t._v(" "),s("h2",{attrs:{id:"55-减少过程调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#55-减少过程调用"}},[t._v("#")]),t._v(" 5.5 减少过程调用")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("牺牲程序的模块性来获得高性能")]),t._v(" "),s("ul",[s("li",[t._v("不使用函数调用来获取每个向量元素, 而是直接访问数组")])])]),t._v(" "),s("h2",{attrs:{id:"56-消除不必要的内存引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#56-消除不必要的内存引用"}},[t._v("#")]),t._v(" 5.6 消除不必要的内存引用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("用一个临时变量储存累加和, 最后再赋值给 `*dest`")]),t._v(" "),s("ul",[s("li",[t._v("编译器不能判断函数会在什么情况下被调用, 以及程序员的本意\n"),s("ul",[s("li",[t._v("所以需要人为的创建临时变量来避免不断地读和写内存")])])])])]),t._v(" "),s("h2",{attrs:{id:"57-理解现代处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#57-理解现代处理器"}},[t._v("#")]),t._v(" 5.7 理解现代处理器")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("考虑利用处理器微体系结构的优化")]),t._v(" "),s("ul",[s("li",[t._v("处理器的微体系结构即是处理器用来执行指令的底层系统设计")]),t._v(" "),s("li",[t._v("多条指令可以并行地执行, 同时又呈现出一种简单的顺序执行指令的表象\n"),s("ul",[s("li",[t._v("这种现象即为"),s("strong",[t._v("指令级并行")])])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("延迟界限与吞吐量界限")]),t._v(" "),s("ul",[s("li",[t._v("当一系列操作必须按照严格顺序执行时, 就会遇到"),s("strong",[t._v("延迟界限")]),t._v("(latency bound)\n"),s("ul",[s("li",[t._v("当代码中的数据相关限制了处理器利用指令级并行的能力时, 延迟界限能限制程序性能")])])]),t._v(" "),s("li",[s("strong",[t._v("吞吐量界限")]),t._v("(throughput bound)\n"),s("ul",[s("li",[t._v("刻画了处理器功能单元的原始计算能力")]),t._v(" "),s("li",[t._v("这个界限是程序性能的终级限制")])])])])]),t._v(" "),s("h3",{attrs:{id:"571-整体操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#571-整体操作"}},[t._v("#")]),t._v(" 5.7.1 整体操作")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("超标量乱序处理器")]),t._v(" "),s("ul",[s("li",[t._v("超标量(superscalar)\n"),s("ul",[s("li",[t._v("可以在每个时钟周期执行多个操作")])])]),t._v(" "),s("li",[t._v("乱序(out-of-order)\n"),s("ul",[s("li",[t._v("指令执行的顺序不一定要与它们在机器级程序中的顺序一致")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("乱序处理器的框图")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20220125141634-2022-01-25-14-16-35.png",alt:"20220125141634-2022-01-25-14-16-35"}})])])]),t._v(" "),s("h3",{attrs:{id:"572-功能单元的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#572-功能单元的性能"}},[t._v("#")]),t._v(" 5.7.2 功能单元的性能")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("算术运算的性能")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("延迟")]),t._v("(latency)\n"),s("ul",[s("li",[t._v("表示完成运算所需要的总时间")])])]),t._v(" "),s("li",[s("strong",[t._v("发射时间")]),t._v("(issue time)\n"),s("ul",[s("li",[t._v("表示两个连续的同类型运算之间需要的最小时钟周期数")]),t._v(" "),s("li",[t._v("发射时间为 1 的单元被称为"),s("strong",[t._v("完全流水线化")]),t._v("(fully pipelined)的")])])]),t._v(" "),s("li",[s("strong",[t._v("容量")]),t._v("(capacity)\n"),s("ul",[s("li",[t._v("表示能够执行该运算的功能单元的数量")])])]),t._v(" "),s("li",[s("strong",[t._v("吞吐量")]),t._v(" "),s("ul",[s("li",[t._v("针对特定的操作定义")]),t._v(" "),s("li",[t._v("对于容量为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.05ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.719ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 760 727","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-671-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-671-TEX-I-1D436"}})])])])])]),t._v(", 发射时间为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.14ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 504 683","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-371-TEX-I-1D43C",d:"M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D43C","xlink:href":"#MJX-371-TEX-I-1D43C"}})])])])])]),t._v(" 的操作来说\n"),s("ul",[s("li",[t._v("处理器可能获得的吞吐量为每时钟周期 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.991ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 1764 1000","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1202-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}}),s("path",{attrs:{id:"MJX-1202-TEX-N-2F",d:"M423 750Q432 750 438 744T444 730Q444 725 271 248T92 -240Q85 -250 75 -250Q68 -250 62 -245T56 -231Q56 -221 230 257T407 740Q411 750 423 750Z"}}),s("path",{attrs:{id:"MJX-1202-TEX-I-1D43C",d:"M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-1202-TEX-I-1D436"}})]),s("g",{attrs:{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD",transform:"translate(760,0)"}},[s("g",{attrs:{"data-mml-node":"mo"}},[s("use",{attrs:{"data-c":"2F","xlink:href":"#MJX-1202-TEX-N-2F"}})])]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(1260,0)"}},[s("use",{attrs:{"data-c":"1D43C","xlink:href":"#MJX-1202-TEX-I-1D43C"}})])])])])]),t._v(" 个操作")],1)])],1),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("需要注意的是加载单元的数量也会限制吞吐量")]),t._v(" "),s("ul",[s("li",[t._v("设 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.605ex",height:"1.934ex",role:"img",focusable:"false",viewBox:"0 -705 1151.6 855","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1139-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}}),s("path",{attrs:{id:"MJX-1139-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"msub"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-1139-TEX-I-1D436"}})]),s("g",{attrs:{"data-mml-node":"mn",transform:"translate(748,-150) scale(0.707)"}},[s("use",{attrs:{"data-c":"31","xlink:href":"#MJX-1139-TEX-N-31"}})])])])])])]),t._v(" 为加载单元的数量, 则吞吐量为\n"),s("ul",[s("li",[s("p",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG",display:"true"}},[s("svg",{staticStyle:{"vertical-align":"-1.552ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.858ex",height:"4.855ex",role:"img",focusable:"false",viewBox:"0 -1460 5241.2 2146","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1203-TEX-N-6D",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-69",d:"M69 609Q69 637 87 653T131 669Q154 667 171 652T188 609Q188 579 171 564T129 549Q104 549 87 564T69 609ZM247 0Q232 3 143 3Q132 3 106 3T56 1L34 0H26V46H42Q70 46 91 49Q100 53 102 60T104 102V205V293Q104 345 102 359T88 378Q74 385 41 385H30V408Q30 431 32 431L42 432Q52 433 70 434T106 436Q123 437 142 438T171 441T182 442H185V62Q190 52 197 50T232 46H255V0H247Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-6E",d:"M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q450 438 463 329Q464 322 464 190V104Q464 66 466 59T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-2C",d:"M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}}),s("path",{attrs:{id:"MJX-1203-TEX-I-1D43C",d:"M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mfrac"}},[s("g",{attrs:{"data-mml-node":"mrow",transform:"translate(220,710)"}},[s("g",{attrs:{"data-mml-node":"mo"}},[s("use",{attrs:{"data-c":"6D","xlink:href":"#MJX-1203-TEX-N-6D"}}),s("use",{attrs:{"data-c":"69","xlink:href":"#MJX-1203-TEX-N-69",transform:"translate(833,0)"}}),s("use",{attrs:{"data-c":"6E","xlink:href":"#MJX-1203-TEX-N-6E",transform:"translate(1111,0)"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(1667,0)"}},[s("use",{attrs:{"data-c":"28","xlink:href":"#MJX-1203-TEX-N-28"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(2056,0)"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-1203-TEX-I-1D436"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(2816,0)"}},[s("use",{attrs:{"data-c":"2C","xlink:href":"#MJX-1203-TEX-N-2C"}})]),s("g",{attrs:{"data-mml-node":"msub",transform:"translate(3260.7,0)"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-1203-TEX-I-1D436"}})]),s("g",{attrs:{"data-mml-node":"mn",transform:"translate(748,-150) scale(0.707)"}},[s("use",{attrs:{"data-c":"31","xlink:href":"#MJX-1203-TEX-N-31"}})])]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(4412.2,0)"}},[s("use",{attrs:{"data-c":"29","xlink:href":"#MJX-1203-TEX-N-29"}})])]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(2368.6,-686)"}},[s("use",{attrs:{"data-c":"1D43C","xlink:href":"#MJX-1203-TEX-I-1D43C"}})]),s("rect",{attrs:{width:"5001.2",height:"60",x:"120",y:"220"}})])])])])])],1)])])],1)])])])])]),t._v(" "),s("li",[s("details",{staticClass:"custom-block details"},[s("summary",[t._v("参考机算术运算的性能")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20220125142149-2022-01-25-14-21-50.png",alt:"20220125142149-2022-01-25-14-21-50"}})])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("延迟界限给出了任何必须按照严格顺序完成运算的函数所需要的最小 CPE 值")])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("吞吐量界限给出了 CPU 的最小界限")])])])])]),t._v(" "),s("h3",{attrs:{id:"573-处理器操作的抽象模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#573-处理器操作的抽象模型"}},[t._v("#")]),t._v(" 5.7.3 处理器操作的抽象模型")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("程序的数据流(data-flow)表示")]),t._v(" "),s("ul",[s("li",[t._v("一种图形化的表示方法, 展示了不同操作之间的数据相关是如何限制它们的执行顺序的")]),t._v(" "),s("li",[t._v("这些限制会形成图中的关键路径(critical path)\n"),s("ul",[s("li",[t._v("这是执行一种机器指令所需时钟周期数的一个下界")])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("循环寄存器")]),t._v(" "),s("ul",[s("li",[t._v("对于循环来说, 即作为源值, 又作为目的的寄存器称为循环寄存器")]),t._v(" "),s("li",[t._v("循环寄存器之间的操作链决定了限制性能的数据相关")]),t._v(" "),s("li",[s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("可以重新调整操作链的结构来增加指令的并行性")])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("确定关键路径时, 主要以涉及到循环寄存器的运算为主")]),t._v(" "),s("ul",[s("li",[t._v("其它运算可以并发执行")])])])])])]),t._v(" "),s("h2",{attrs:{id:"58-循环展开"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#58-循环展开"}},[t._v("#")]),t._v(" 5.8 循环展开")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("循环展开是一种程序变换, 其通过增加每次迭代计算的元素的数量, 减少循环的迭代次数")]),t._v(" "),s("ul",[s("li",[t._v("其能从两个方面改善程序的性能\n"),s("ul",[s("li",[t._v("减少了不直接有助于程序结果的操作的数量\n"),s("ul",[s("li",[t._v("如循环索引计算和条件分支")])])]),t._v(" "),s("li",[t._v("它提供了一些方法, 可以进一步的变化代码, 减少整个计算中关键路径上的操作数量")])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("对一个循环按任意因子 "),s("code",[t._v("k")]),t._v(" 进行展开的处理方法")]),t._v(" "),s("ul",[s("li",[t._v("将循环上限设为 "),s("code",[t._v("n-k+1")])]),t._v(" "),s("li",[t._v("在循环内对元素 "),s("code",[t._v("i")]),t._v(" 到 "),s("code",[t._v("i+k-1")]),t._v(" 进行循环操作\n"),s("ul",[s("li",[t._v("每次迭代, 循环索引 "),s("code",[t._v("i")]),t._v(" 加 "),s("code",[t._v("k")])])])]),t._v(" "),s("li",[t._v("采用第二个循环, 以每次处理一个元素的方式, 处理向量的最后几个元素")])])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("用 "),s("code",[t._v("-o3")]),t._v(" 或更高的等级调用 "),s("code",[t._v("gcc")]),t._v(" 时, 它就会执行循环展开")])])])])]),t._v(" "),s("h2",{attrs:{id:"59-提高并行性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#59-提高并行性"}},[t._v("#")]),t._v(" 5.9 提高并行性")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("硬件具有以更高速率执行乘法和加法的潜力, 但是代码不能利用这种能力")])]),t._v(" "),s("h3",{attrs:{id:"591-多个累积变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#591-多个累积变量"}},[t._v("#")]),t._v(" 5.9.1 多个累积变量")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("分割运算")]),t._v(" "),s("ul",[s("li",[t._v("对于一个可结合和可变换的合并运算来说\n"),s("ul",[s("li",[t._v("比如整数加法或乘法")]),t._v(" "),s("li",[t._v("可以通过将一组合并运算分割成两个或更多的部分，并在最后合并结果来提高性能")])])]),t._v(" "),s("li",[t._v("与循环展开结合在一起，可以消除部分数据相关，充分利用处理器的并行能力\n"),s("ul",[s("li",[t._v("只有保持能够执行该操作的所有功能的流水线都是满的，程序才能达到这个操作的吞吐量界限\n"),s("ul",[s("li",[t._v("对于延迟为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.541ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 681 683","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-803-TEX-I-1D43F",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D43F","xlink:href":"#MJX-803-TEX-I-1D43F"}})])])])])]),t._v(", 容量为 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.05ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.719ex",height:"1.645ex",role:"img",focusable:"false",viewBox:"0 -705 760 727","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-671-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-671-TEX-I-1D436"}})])])])])]),t._v(" 的操作而言, 要求循环展开因子 "),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[s("svg",{staticStyle:{"vertical-align":"-0.312ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"9.09ex",height:"1.907ex",role:"img",focusable:"false",viewBox:"0 -705 4018 843","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[s("defs",[s("path",{attrs:{id:"MJX-1204-TEX-I-1D458",d:"M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"}}),s("path",{attrs:{id:"MJX-1204-TEX-N-2265",d:"M83 616Q83 624 89 630T99 636Q107 636 253 568T543 431T687 361Q694 356 694 346T687 331Q685 329 395 192L107 56H101Q83 58 83 76Q83 77 83 79Q82 86 98 95Q117 105 248 167Q326 204 378 228L626 346L360 472Q291 505 200 548Q112 589 98 597T83 616ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"}}),s("path",{attrs:{id:"MJX-1204-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"}}),s("path",{attrs:{id:"MJX-1204-TEX-N-22C5",d:"M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z"}}),s("path",{attrs:{id:"MJX-1204-TEX-I-1D43F",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}})]),s("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[s("g",{attrs:{"data-mml-node":"math"}},[s("g",{attrs:{"data-mml-node":"mi"}},[s("use",{attrs:{"data-c":"1D458","xlink:href":"#MJX-1204-TEX-I-1D458"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(798.8,0)"}},[s("use",{attrs:{"data-c":"2265","xlink:href":"#MJX-1204-TEX-N-2265"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(1854.6,0)"}},[s("use",{attrs:{"data-c":"1D436","xlink:href":"#MJX-1204-TEX-I-1D436"}})]),s("g",{attrs:{"data-mml-node":"mo",transform:"translate(2836.8,0)"}},[s("use",{attrs:{"data-c":"22C5","xlink:href":"#MJX-1204-TEX-N-22C5"}})]),s("g",{attrs:{"data-mml-node":"mi",transform:"translate(3337,0)"}},[s("use",{attrs:{"data-c":"1D43F","xlink:href":"#MJX-1204-TEX-I-1D43F"}})])])])])])],1)])])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("浮点加法和乘法")]),t._v(" "),s("ul",[s("li",[t._v("浮点加法和乘法是不可结合的")]),t._v(" "),s("li",[t._v("大多数物理现象是连续的, 所以数值数据也趋向于相当平滑, 分割运算不会出什么问题")]),t._v(" "),s("li",[t._v("对于大多数应用程序来说, 使性能翻倍, 要比冒对奇怪的数据模式产生不同的结果的风险更重要")])])])]),t._v(" "),s("h3",{attrs:{id:"592-重新结合变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#592-重新结合变换"}},[t._v("#")]),t._v(" 5.9.2 重新结合变换")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("变换运算顺序")]),t._v(" "),s("ul",[s("li",[t._v("核心是通过重新组合变换, 减少关键路径上的运算数量, 以提升并行性")]),t._v(" "),s("li",[t._v("示例\n"),s("ul",[s("li",[s("code",[t._v("acc = (acc OP data[i]) OP data[i+1]")]),t._v(" 变换为")]),t._v(" "),s("li",[s("code",[t._v("acc = acc OP (data[i] OP data[i+1]")])]),t._v(" "),s("li",[t._v("如此第二个 "),s("code",[t._v("OP")]),t._v(" 运算便不在关键路径上, 可以并发的执行")])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("大多数编译器不会尝试对浮点运算做重新组合")]),t._v(" "),s("li",[t._v("当前的 GCC 版本会对整数运算执行重新结合, 但不是总有好的结果")])])])])])]),t._v(" "),s("h6",{staticClass:"anchor-user-defined",attrs:{id:"SIMD"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#SIMD"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("SIMD 用向量指令达到更高的并行度")]),t._v(" "),s("ul",[s("li",[t._v("SIMD(Single-Instruction, Multiple-Data) 单指令多数据\n"),s("ul",[s("li",[t._v("一条指令能够产生对多个数据值的计算")])])]),t._v(" "),s("li",[t._v("AVX 向量寄存器长为 32 字节, 可以存放 8 个 32 位数和 4 个 64 位数\n"),s("ul",[s("li",[t._v("AVX 指令可以对这些寄存器进行向量操作\n"),s("ul",[s("li",[t._v("比如并行执行 8 组数值或 4 组数值的加法或乘法")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"510-优化合并代码的结果小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#510-优化合并代码的结果小结"}},[t._v("#")]),t._v(" 5.10 优化合并代码的结果小结")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("书上的例子说明现代处理器具有相当的计算能力, 但是可能需要按非常程式化的方式编写程序才能将这些能力诱发出来")])]),t._v(" "),s("h2",{attrs:{id:"511-一些限制因素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#511-一些限制因素"}},[t._v("#")]),t._v(" 5.11 一些限制因素")]),t._v(" "),s("h3",{attrs:{id:"5111-寄存器溢出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5111-寄存器溢出"}},[t._v("#")]),t._v(" 5.11.1 寄存器溢出")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("ul",[s("li",[t._v("如果循环展开的 "),s("code",[t._v("k")]),t._v(" 值过大, 则并行度 "),s("code",[t._v("p")]),t._v(" 会超过可用的寄存器数量, 如此编译器就会诉诸溢出(spilling)")]),t._v(" "),s("li",[t._v("溢出后一些临时变量(一般为累加值)会存放到内存中\n"),s("ul",[s("li",[t._v("通常是在运行时堆栈上分配空间")]),t._v(" "),s("li",[t._v("如此会导致较多的内存读写操作, 其性能可能反而会下降")])])])])]),t._v(" "),s("h3",{attrs:{id:"5112-分支预测和预测错误惩罚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5112-分支预测和预测错误惩罚"}},[t._v("#")]),t._v(" 5.11.2 分支预测和预测错误惩罚")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("书写适合用条件传送实现的代码")]),t._v(" "),s("ul",[s("li",[t._v("分支预测只对有规律的模式可行")]),t._v(" "),s("li",[t._v("对于本质上无法预测的情况\n"),s("ul",[s("li",[t._v("如果编译器能产生使用条件数据传送而不是使用条件控制转移的代码, 则可以极大的提升程序的性能")]),t._v(" "),s("li",[t._v('GCC 能够为以一种更"功能性的"风格书写的代码产生条件传送\n'),s("ul",[s("li",[s("p",[t._v("如在程序中使用条件操作符")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" min "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])])])])])])])]),t._v(" "),s("h2",{attrs:{id:"512-理解内存性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#512-理解内存性能"}},[t._v("#")]),t._v(" 5.12 理解内存性能")]),t._v(" "),s("h3",{attrs:{id:"5121-加载的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5121-加载的性能"}},[t._v("#")]),t._v(" 5.12.1 加载的性能")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("ul",[s("li",[t._v("对于参考机的两个加载单元而言, 其每个时钟周期只能启动一条加载操作\n"),s("ul",[s("li",[t._v("所以各个操作的 CPE 不可能小于 0.5\n"),s("ul",[s("li",[s("a",{attrs:{href:"#SIMD"}},[t._v("SIMD")]),t._v(" 操作可以突破这个限制")])])])])])])]),t._v(" "),s("h3",{attrs:{id:"5122-存储的性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5122-存储的性能"}},[t._v("#")]),t._v(" 5.12.2 存储的性能")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("存储操作")]),t._v(" "),s("ul",[s("li",[t._v("存储操作并不影响任何寄存器\n"),s("ul",[s("li",[t._v("因此一系列的储存操作不会产生数据相关")])])]),t._v(" "),s("li",[t._v("只有加载操作会受存储操作结果的影响")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("存储缓冲区")]),t._v(" "),s("ul",[s("li",[s("details",{staticClass:"custom-block details"},[s("summary",[t._v("存储缓冲区示意图")]),t._v(" "),s("ul",[s("li",[t._v("注意图中数据和地址箭头的方向\n"),s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/20220125204604-2022-01-25-20-46-04.png",alt:"20220125204604-2022-01-25-20-46-04"}})])])])]),t._v(" "),s("li",[t._v("存储缓冲区中包含已经被发射到存储单元而又还没有完成存储操作的地址和数据\n"),s("ul",[s("li",[t._v("这里的完成包括更新数据高速缓存")])])]),t._v(" "),s("li",[t._v("当一个加载操作发生时, 其必须检查存储缓冲区的条目, 看有没有地址相匹配\n"),s("ul",[s("li",[t._v("如果有地址相匹配, 其就取出相应的数据条目作为加载操作的结果")])])]),t._v(" "),s("li",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("对于内存操作, 只有加载地址和存储地址被计算出来以后, 处理器才能确定哪些指令会影响其他的指令")])])])])]),t._v(" "),s("h2",{attrs:{id:"513-应用-性能提高技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#513-应用-性能提高技术"}},[t._v("#")]),t._v(" 5.13 应用: 性能提高技术")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("基本策略")]),t._v(" "),s("ul",[s("li",[t._v("高级设计\n"),s("ul",[s("li",[t._v("为遇到的问题选择适当的算法和数据结构")])])]),t._v(" "),s("li",[t._v("基本编码原则\n"),s("ul",[s("li",[t._v("消除连续的函数调用")]),t._v(" "),s("li",[t._v("在可能时, 将计算移至循环外")]),t._v(" "),s("li",[t._v("考虑有选择地妥协程序的模块性以获得更大的效率")]),t._v(" "),s("li",[t._v("消除不必要的内存引用")]),t._v(" "),s("li",[t._v("引入临时变量来保存中间结果\n"),s("ul",[s("li",[t._v("只有在最后的值计算出来时, 才将结果存放到数组或全局变量中")])])])])]),t._v(" "),s("li",[t._v("低级优化\n"),s("ul",[s("li",[t._v("循环展开, 降低开销, 并且使进一步的优化成为可能")]),t._v(" "),s("li",[t._v("使用诸如多个累积变量和重新结合等技术, 找到方法提高指令级并行")]),t._v(" "),s("li",[t._v("用功能性的风格重写条件操作, 使得编译器采用条件数据传送, 而不是条件跳转指令")])])])])]),t._v(" "),s("h2",{attrs:{id:"514-确认的消除性能瓶颈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#514-确认的消除性能瓶颈"}},[t._v("#")]),t._v(" 5.14 确认的消除性能瓶颈")]),t._v(" "),s("h3",{attrs:{id:"5141-程序剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5141-程序剖析"}},[t._v("#")]),t._v(" 5.14.1 程序剖析")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),s("ul",[s("li",[t._v("UNIX 系统中有 GPROF 可以用于性能剖析")])])]),t._v(" "),s("h3",{attrs:{id:"5142-使用剖析程序来指导优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#5142-使用剖析程序来指导优化"}},[t._v("#")]),t._v(" 5.14.2 使用剖析程序来指导优化")])])}),[],!1,null,null,null);a.default=i.exports}}]);