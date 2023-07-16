(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{830:function(s,t,a){"use strict";a.r(t);var n=a(12),e=function(s){s.options.__data__block__={markmap_1a962850:"- [了解ucore编程方法和通用数据结构](#了解ucore编程方法和通用数据结构)\n  - [ucore 编程方法](#ucore-编程方法)\n  - [ucore 通用的数据结构](#ucore-通用的数据结构)\n    - [双向循环链表](#双向循环链表)\n    - [uCore的双向链表结构定义](#ucore的双向链表结构定义)\n      - [链表操作函数](#链表操作函数)\n      - [访问链表节点所在的宿主数据结构](#访问链表节点所在的宿主数据结构)"}},r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"了解ucore编程方法和通用数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解ucore编程方法和通用数据结构"}},[s._v("#")]),s._v(" 了解ucore编程方法和通用数据结构")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("课件")]),s._v(" "),a("iframe",{attrs:{src:s.$withBase("/pdf/操作系统/lec2-lab0_642809998.pdf"),width:"100%",height:"600"}})]),s._v(" "),a("Markmap",{attrs:{id:"markmap_1a962850",code:s.$dataBlock.markmap_1a962850}}),a("h2",{attrs:{id:"ucore-编程方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ucore-编程方法"}},[s._v("#")]),s._v(" ucore 编程方法")]),s._v(" "),a("ul",[a("li",[s._v("ucore主要基于C语言设计，采用了一定的面向对象编程方法")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /lab2/kern/mm/pmm.h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ---------------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("pmm_manager")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("init_memmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("alloc_pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("free_pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("nr_free_pages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"ucore-通用的数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ucore-通用的数据结构"}},[s._v("#")]),s._v(" ucore 通用的数据结构")]),s._v(" "),a("h3",{attrs:{id:"双向循环链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向循环链表"}},[s._v("#")]),s._v(" 双向循环链表")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ElemType data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("foo_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("图示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/%E5%9B%BE%E7%A4%BA-2021-04-03-08-03-46.png",alt:"图示-2021-04-03-08-03-46"}})])]),s._v(" "),a("ul",[a("li",[s._v("需要为每种特定数据结构类型定义针对这个数据结构的特定链表插入、删除等各种操作，会导致代码冗余")]),s._v(" "),a("li",[s._v("为了减少代码冗余，引入的双向链表结构体")])]),s._v(" "),a("h3",{attrs:{id:"ucore的双向链表结构定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ucore的双向链表结构定义"}},[s._v("#")]),s._v(" uCore的双向链表结构定义")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("prev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typedef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry_t")]),s._v(" free_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" nr_free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("free_area_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("atomic_t")]),s._v(" ref"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  ……\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry_t")]),s._v(" page_link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/%E7%A4%BA%E6%84%8F%E5%9B%BE-2021-04-03-08-10-12.png",alt:"示意图-2021-04-03-08-10-12"}})]),s._v(" "),a("h4",{attrs:{id:"链表操作函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链表操作函数"}},[s._v("#")]),s._v(" 链表操作函数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("list_init(list_entry_t *elm)")])]),s._v(" "),a("li",[a("code",[s._v("list_add_after")]),s._v(" 和 "),a("code",[s._v("list_add_before")])]),s._v(" "),a("li",[a("code",[s._v("list_del(list_entry_t *listelm)")])])]),s._v(" "),a("h4",{attrs:{id:"访问链表节点所在的宿主数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问链表节点所在的宿主数据结构"}},[s._v("#")]),s._v(" 访问链表节点所在的宿主数据结构")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("le2page")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("le"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("to_struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("le"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 带参数的宏定义")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据指向结构中特定属性的指针获取指向该结构的指针")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("to_struct")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ptr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("offsetof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 取结构中某一属性的偏移量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name function"}},[s._v("offsetof")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("size_t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("free_area_t")]),s._v(" free_area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("list_entry_t")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("le "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("free_area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("free_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("le"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("list_next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("le"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("free_area"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("free_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("le2page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("le"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" page_link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" ……\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 宏替换后为 ((struct *)((char *)(le) - ((size_t)(&((struct Page *)0)->page_link))))")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("代码理解\n"),a("ul",[a("li",[a("code",[s._v("size_t")]),s._v(" 的返回是无符号类型，"),a("code",[s._v("size_t")]),s._v(" 是保证能保留任何数组索引的类型\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/a/2550799/11152760",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[a("code",[s._v("&((struct Page *)0)->page_link")]),s._v(" 相当于获取 Page 结构中 page_link 属性的偏移量\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/a/35135814/11152760",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("C 语言中允许使用指针变量 "),a("code",[s._v("(char *)")]),s._v(" 来按字节访问任意变量， "),a("code",[s._v("(char *)(le)")]),s._v(" 相当于是取 "),a("code",[s._v("le")]),s._v(" 变量首个 byte 的地址\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/a/53079449/11152760",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)])])])])])])],1)}),[],!1,null,null,null);"function"==typeof e&&e(r);t.default=r.exports}}]);