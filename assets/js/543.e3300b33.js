(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1197:function(t,a,e){"use strict";e.r(a);var l=e(12),v=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"80x86-处理器与保护模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#80x86-处理器与保护模式"}},[t._v("#")]),t._v(" 80x86 处理器与保护模式")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"assets/80X86%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E7%BB%87%E7%BB%93%E6%9E%84%E7%AE%80%E8%BF%B0.pdf"}},[t._v("🔗 课件")])])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"80x86-处理器的发展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#80x86-处理器的发展"}},[t._v("#")]),t._v(" 80x86 处理器的发展")]),t._v(" "),e("h3",{attrs:{id:"16-位-80x86-微处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#16-位-80x86-微处理器"}},[t._v("#")]),t._v(" 16 位 80X86 微处理器")]),t._v(" "),e("ul",[e("li",[t._v("8086/8088 微处理器")]),t._v(" "),e("li",[t._v("80186 和 80286 微处理器\n"),e("ul",[e("li",[t._v("IBM公司以80286为CPU生产了著名的IBM-PCZAT微型计算机，它的许多技术被沿用至今")])])])]),t._v(" "),e("h3",{attrs:{id:"32-位的-80x86-微处理器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#32-位的-80x86-微处理器"}},[t._v("#")]),t._v(" 32 位的 80x86 微处理器")]),t._v(" "),e("ul",[e("li",[t._v("80386\n"),e("ul",[e("li",[t._v("1985 年， Intel 公司推出的第四代32位微处理器")]),t._v(" "),e("li",[t._v("其有 3 种工作模式："),e("strong",[t._v("实地址模式")]),t._v("，"),e("strong",[t._v("虚地址保护模式")]),t._v("和"),e("strong",[t._v("虚拟8086模式")])])])])]),t._v(" "),e("h2",{attrs:{id:"32-位微处理器的寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#32-位微处理器的寄存器"}},[t._v("#")]),t._v(" 32 位微处理器的寄存器")]),t._v(" "),e("ul",[e("li",[t._v("80X86微处理器由16位升级为32位后，它的寄存器也对应升级为32位")]),t._v(" "),e("li",[t._v("为了新的工作方式和存储管理的需要，增加了一些用于控制的寄存器")])]),t._v(" "),e("h3",{attrs:{id:"数据寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据寄存器"}},[t._v("#")]),t._v(" 数据寄存器")]),t._v(" "),e("ul",[e("li",[t._v("16位80X86处理器原有的4个通用数据寄存器扩展为32位，命名为EAX、EBX、ECX和EDX")]),t._v(" "),e("li",[t._v("仍然可以使用原有的16位和8位寄存嚣，如AX、BX、CX、DX、AH、AL、BH、BL.....\n"),e("ul",[e("li",[t._v("保持向下兼容\n"),t._v(" "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210411095426-2021-04-11-09-54-26.png",alt:"20210411095426-2021-04-11-09-54-26"}})])])])]),t._v(" "),e("h3",{attrs:{id:"地址寄存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地址寄存器"}},[t._v("#")]),t._v(" 地址寄存器")]),t._v(" "),e("ul",[e("li",[t._v("原有的4个主要用于内存寻址的通用寄存器同样扩展为32位，命名为 ES1、ED1、EBP、ESP\n"),e("ul",[e("li",[t._v("在实地址模式下仍然可以使用诛有的16位寄存器S1、D1、BP和SP 。")])])]),t._v(" "),e("li",[t._v("指令指针寡存器扩展为32位，更名为EIP，实地址下仍然可以使用它的低16位IP")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210411095809-2021-04-11-09-58-09.png",alt:"20210411095809-2021-04-11-09-58-09"}})]),t._v(" "),e("ul",[e("li",[t._v("在原有的4个段寄存器 (CS DS SS ES) 基础上上，增加了2个新的段寡存器FS和GS\n"),e("ul",[e("li",[t._v("段寄存器长度均为16位，其中13位代表内存段的一个编号，称为“"),e("strong",[t._v("段选择器")]),t._v("”")])])])]),t._v(" "),e("h2",{attrs:{id:"80x86-的三种工作模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#80x86-的三种工作模式"}},[t._v("#")]),t._v(" 80x86 的三种工作模式")]),t._v(" "),e("ul",[e("li",[t._v("实模式\n"),e("ul",[e("li",[t._v("操作相当于一个可进行32位快速运算的8086")])])]),t._v(" "),e("li",[t._v("保护模式\n"),e("ul",[e("li",[t._v("是80x86设计目标全部达到的工作模式")]),t._v(" "),e("li",[t._v("通过对程序使用的存储区采用分段、分页的存储管理机制，达到分级使用、互不干扰的保护目的\n"),e("ul",[e("li",[e("strong",[t._v("支持多任务处理功能")])])])]),t._v(" "),e("li",[t._v("能为每个任务提供一台虚拟处理器，使每个任务单独执行，快速切换\n"),e("ul",[e("li",[e("strong",[t._v("支持虚拟储存器特性")])])])])])]),t._v(" "),e("li",[t._v("虚拟8086模式\n"),e("ul",[e("li",[t._v("保护模式下同时模拟多个8086处理器.")])])])]),t._v(" "),e("h2",{attrs:{id:"保护模式下的-80x86段模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保护模式下的-80x86段模式"}},[t._v("#")]),t._v(" 保护模式下的 80X86(段模式)")]),t._v(" "),e("ul",[e("li",[t._v("保护模式中“保护”的含义\n"),e("ul",[e("li",[t._v("分清不同程序使用的存储区域，不允许随便使用别人的数据和代码\n"),e("ul",[e("li",[t._v("必要条件\n"),e("ul",[e("li",[t._v("要标记每段存储区的所有者或被使用的权限级别")]),t._v(" "),e("li",[t._v("要标记使用者是谁(权限级别)")]),t._v(" "),e("li",[t._v("中间环节: CPU要去判断此次访问是否合法")])])])])])])])]),t._v(" "),e("h3",{attrs:{id:"保护模式下的储存器寻址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保护模式下的储存器寻址"}},[t._v("#")]),t._v(" 保护模式下的储存器寻址")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在X86-32体系结构的保护模式下，一个内存地址是由段基地址、偏移地址两个要素构成的")]),t._v(" "),e("ul",[e("li",[t._v("通过段选择器查询描述符表，来得到相应的段基地址\n"),t._v(" "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210411101702-2021-04-11-10-17-02.png",alt:"20210411101702-2021-04-11-10-17-02"}})])])]),t._v(" "),e("li",[e("p",[t._v("每个段的描述(即段描述符) 由三个要系构成一一段基地址 (32位):段长度(20位，段长\n度单位为"),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[e("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.919ex",height:"1.887ex",role:"img",focusable:"false",viewBox:"0 -833.9 1290.1 833.9","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("defs",[e("path",{attrs:{id:"MJX-1974-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}}),e("path",{attrs:{id:"MJX-1974-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})]),e("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"}},[e("g",{attrs:{"data-mml-node":"math"}},[e("g",{attrs:{"data-mml-node":"msup"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("use",{attrs:{"data-c":"32","xlink:href":"#MJX-1974-TEX-N-32"}})]),e("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(533,363) scale(0.707)","data-mjx-texclass":"ORD"}},[e("g",{attrs:{"data-mml-node":"mn"}},[e("use",{attrs:{"data-c":"31","xlink:href":"#MJX-1974-TEX-N-31"}}),e("use",{attrs:{"data-c":"32","xlink:href":"#MJX-1974-TEX-N-32",transform:"translate(500,0)"}})])])])])])])]),t._v("(4 KB)): 访问权限")],1),t._v(" "),e("ul",[e("li",[t._v("段描述符的长度为64位")])])]),t._v(" "),e("li",[e("p",[t._v("出于系统兼容原因，段寄存器只有16位，因为要通过描述符表的映射来表示64位的段描述符")]),t._v(" "),e("ul",[e("li",[t._v("将段寄存器中的高13位值作为索引来访问描述符表，从而获得64位的段描述符")])])])]),t._v(" "),e("h4",{attrs:{id:"gdt-与-ldt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gdt-与-ldt"}},[t._v("#")]),t._v(" GDT 与 LDT")]),t._v(" "),e("ul",[e("li",[t._v("GDT是全局描述符表，主要存放操作系统和各任务公用的描述符\n"),e("ul",[e("li",[t._v("公用的数据和代码段描述符、各任务的 TSS 描述符和 "),e("strong",[t._v("LDT 描述符")]),t._v(" "),e("ul",[e("li",[t._v("TSS 是任务状态段，存放各个任务私有运行状态信息描述符")])])]),t._v(" "),e("li",[t._v("GDT register (GDTR) ，48bit\n"),e("ul",[e("li",[t._v("GDT 表的储存地址")])])])])]),t._v(" "),e("li",[t._v("LDT 是局部描述符表，主要存放各个任务的私有描述符\n"),e("ul",[e("li",[t._v("LDT register(LDTR), 16 bit\n"),e("ul",[e("li",[t._v("记录 LDT 描述符在 GDT 中的位置")])])])])]),t._v(" "),e("li",[t._v("段寄存器:\n"),e("ul",[e("li",[t._v("高13位用来指示描述符在描述符表中的索引号")]),t._v(" "),e("li",[t._v("低两位是表示使用描述符的特权级别")]),t._v(" "),e("li",[t._v("另外一位 (T1) 是GDT和LDT的信号量，如果T1=0，则使用GDT，如果T1=1，则使用LDT")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/%E8%AE%BF%E9%97%AEGDT-2021-04-11-10-41-56.png",alt:"访问GDT-2021-04-11-10-41-56"}})]),t._v(" "),e("ul",[e("li",[t._v("首先通过 GDTR 确定 GDT 的位置")]),t._v(" "),e("li",[t._v("然后通过段寄存器中的索引值访问 GDT， 取出相应的描述符\n")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/%E8%AE%BF%E9%97%AELDT-2021-04-11-10-48-40.png",alt:"访问LDT-2021-04-11-10-48-40"}})]),t._v(" "),e("ul",[e("li",[t._v("首先通过 GDTR 确定 GDT 的位置")]),t._v(" "),e("li",[t._v("然后通过 LDTR 中的索引值从 GDT 中取出 LDT 描述符（即 LDT 的起始位置）")]),t._v(" "),e("li",[t._v("最后段寄存器的的索引值取出对应的描述符")])]),t._v(" "),e("p",[t._v("相当于是双重索引\n")]),t._v(" "),e("h4",{attrs:{id:"寄存器与储存器的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#寄存器与储存器的比较"}},[t._v("#")]),t._v(" 寄存器与储存器的比较")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("项目")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("寄存器")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("储存器")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("位置")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在 CPU 内部")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在 CPU 外部")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("访问速度")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("快")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("慢")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("容量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("小")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("大")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("成本")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("低")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("表示方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用名字表示")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("用地址表示")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("没有")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可用多种方式表示")])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);