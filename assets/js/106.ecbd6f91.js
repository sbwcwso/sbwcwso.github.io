(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{715:function(a,t,s){"use strict";s.r(t);var r=s(12),h=function(a){a.options.__data__block__={markmap_1a96284d:"- [第 12 章 并发编程](#第-12-章-并发编程)\n  - [12.1 基于进程的并发编程](#121-基于进程的并发编程)\n    - [12.1.1 基于进程的并发服务器](#1211-基于进程的并发服务器)\n    - [12.1.2 进程的优劣](#1212-进程的优劣)\n  - [12.2 基于 I/O 多路复用的并发编程](#122-基于-io-多路复用的并发编程)\n    - [12.2.1 基于 I/O 多路复用的并发事件驱动服务器](#1221-基于-io-多路复用的并发事件驱动服务器)\n    - [12.2.2 I/O 多路复用技术的优劣](#1222-io-多路复用技术的优劣)\n  - [12.3 基于线程的并发编程](#123-基于线程的并发编程)\n    - [12.3.1 线程执行模型](#1231-线程执行模型)\n    - [12.3.2 Posix 线程](#1232-posix-线程)\n    - [12.3.3 创建线程](#1233-创建线程)\n    - [12.3.4 终止线程](#1234-终止线程)\n    - [12.3.5 回收已终止的线程资源](#1235-回收已终止的线程资源)\n    - [12.3.6 分离线程](#1236-分离线程)\n    - [12.3.7 初始化线程](#1237-初始化线程)\n    - [12.3.8 基于线程的并发服务器](#1238-基于线程的并发服务器)\n  - [12.4 多线程程序中的共享变量](#124-多线程程序中的共享变量)\n      - [12.4.1 线程内存模型](#1241-线程内存模型)\n    - [12.4.2 将变量映射到内存](#1242-将变量映射到内存)\n    - [12.4.3 共享变量](#1243-共享变量)\n  - [12.5 用信号量同步线程](#125-用信号量同步线程)\n    - [12.5.1 进度图](#1251-进度图)\n    - [12.5.2 信号量](#1252-信号量)\n    - [12.5.3 使用信号量来实现互斥](#1253-使用信号量来实现互斥)\n    - [12.5.4 利用信号量来调度资源](#1254-利用信号量来调度资源)"}},e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"第-12-章-并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-12-章-并发编程"}},[a._v("#")]),a._v(" 第 12 章 并发编程")]),a._v(" "),s("Markmap",{attrs:{id:"markmap_1a96284d",code:a.$dataBlock.markmap_1a96284d}}),s("h2",{attrs:{id:"121-基于进程的并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#121-基于进程的并发编程"}},[a._v("#")]),a._v(" 12.1 基于进程的并发编程")]),a._v(" "),s("h3",{attrs:{id:"1211-基于进程的并发服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1211-基于进程的并发服务器"}},[a._v("#")]),a._v(" 12.1.1 基于进程的并发服务器")]),a._v(" "),s("h3",{attrs:{id:"1212-进程的优劣"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1212-进程的优劣"}},[a._v("#")]),a._v(" 12.1.2 进程的优劣")]),a._v(" "),s("h2",{attrs:{id:"122-基于-io-多路复用的并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#122-基于-io-多路复用的并发编程"}},[a._v("#")]),a._v(" 12.2 基于 I/O 多路复用的并发编程")]),a._v(" "),s("h3",{attrs:{id:"1221-基于-io-多路复用的并发事件驱动服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1221-基于-io-多路复用的并发事件驱动服务器"}},[a._v("#")]),a._v(" 12.2.1 基于 I/O 多路复用的并发事件驱动服务器")]),a._v(" "),s("h3",{attrs:{id:"1222-io-多路复用技术的优劣"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1222-io-多路复用技术的优劣"}},[a._v("#")]),a._v(" 12.2.2 I/O 多路复用技术的优劣")]),a._v(" "),s("h2",{attrs:{id:"123-基于线程的并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#123-基于线程的并发编程"}},[a._v("#")]),a._v(" 12.3 基于线程的并发编程")]),a._v(" "),s("h3",{attrs:{id:"1231-线程执行模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1231-线程执行模型"}},[a._v("#")]),a._v(" 12.3.1 线程执行模型")]),a._v(" "),s("h3",{attrs:{id:"1232-posix-线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1232-posix-线程"}},[a._v("#")]),a._v(" 12.3.2 Posix 线程")]),a._v(" "),s("h3",{attrs:{id:"1233-创建线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1233-创建线程"}},[a._v("#")]),a._v(" 12.3.3 创建线程")]),a._v(" "),s("h3",{attrs:{id:"1234-终止线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1234-终止线程"}},[a._v("#")]),a._v(" 12.3.4 终止线程")]),a._v(" "),s("h3",{attrs:{id:"1235-回收已终止的线程资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1235-回收已终止的线程资源"}},[a._v("#")]),a._v(" 12.3.5 回收已终止的线程资源")]),a._v(" "),s("h3",{attrs:{id:"1236-分离线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1236-分离线程"}},[a._v("#")]),a._v(" 12.3.6 分离线程")]),a._v(" "),s("h3",{attrs:{id:"1237-初始化线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1237-初始化线程"}},[a._v("#")]),a._v(" 12.3.7 初始化线程")]),a._v(" "),s("h3",{attrs:{id:"1238-基于线程的并发服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1238-基于线程的并发服务器"}},[a._v("#")]),a._v(" 12.3.8 基于线程的并发服务器")]),a._v(" "),s("h2",{attrs:{id:"124-多线程程序中的共享变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#124-多线程程序中的共享变量"}},[a._v("#")]),a._v(" 12.4 多线程程序中的共享变量")]),a._v(" "),s("h4",{attrs:{id:"1241-线程内存模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1241-线程内存模型"}},[a._v("#")]),a._v(" 12.4.1 线程内存模型")]),a._v(" "),s("h3",{attrs:{id:"1242-将变量映射到内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1242-将变量映射到内存"}},[a._v("#")]),a._v(" 12.4.2 将变量映射到内存")]),a._v(" "),s("h3",{attrs:{id:"1243-共享变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1243-共享变量"}},[a._v("#")]),a._v(" 12.4.3 共享变量")]),a._v(" "),s("h2",{attrs:{id:"125-用信号量同步线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#125-用信号量同步线程"}},[a._v("#")]),a._v(" 12.5 用信号量同步线程")]),a._v(" "),s("h3",{attrs:{id:"1251-进度图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1251-进度图"}},[a._v("#")]),a._v(" 12.5.1 进度图")]),a._v(" "),s("h3",{attrs:{id:"1252-信号量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1252-信号量"}},[a._v("#")]),a._v(" 12.5.2 信号量")]),a._v(" "),s("h3",{attrs:{id:"1253-使用信号量来实现互斥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1253-使用信号量来实现互斥"}},[a._v("#")]),a._v(" 12.5.3 使用信号量来实现互斥")]),a._v(" "),s("h3",{attrs:{id:"1254-利用信号量来调度资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1254-利用信号量来调度资源"}},[a._v("#")]),a._v(" 12.5.4 利用信号量来调度资源")]),a._v(" "),s("h3",{attrs:{id:"1255-基于预线程化的并发服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1255-基于预线程化的并发服务器"}},[a._v("#")]),a._v(" 12.5.5 基于预线程化的并发服务器")]),a._v(" "),s("h2",{attrs:{id:"126-使用线程提高并行性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#126-使用线程提高并行性"}},[a._v("#")]),a._v(" 12.6 使用线程提高并行性")]),a._v(" "),s("h2",{attrs:{id:"127-其他并发问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#127-其他并发问题"}},[a._v("#")]),a._v(" 12.7 其他并发问题")]),a._v(" "),s("h3",{attrs:{id:"1271-线程安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1271-线程安全"}},[a._v("#")]),a._v(" 12.7.1 线程安全")]),a._v(" "),s("h3",{attrs:{id:"1272-可重入性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1272-可重入性"}},[a._v("#")]),a._v(" 12.7.2 可重入性")]),a._v(" "),s("h3",{attrs:{id:"1273"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#1273"}},[a._v("#")]),a._v(" 12.7.3")])],1)}),[],!1,null,null,null);"function"==typeof h&&h(e);t.default=e.exports}}]);