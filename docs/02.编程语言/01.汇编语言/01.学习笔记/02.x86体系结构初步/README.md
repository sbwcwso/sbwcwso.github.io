---
title: README
date: 2021-04-10 18:51:59
permalink:
categories: 
  - 编程语言
  - 汇编语言
  - 01-清华公开课
  - 2-x86体系结构初步
tags: 
  - null
author: 
  name: 木子识时务
  link: https://github.com/sbwcwso
editLink: true
---
# 80X86计算机组织结构简述

* [🔗 课件](assets/80X86计算机组织结构简述.pdf)

---

## 计算机系统

<!--sec data-title="计算机系统硬件组成示意图" data-id="section20210410185743" data-show=true ces-->
![20210410185841-2021-04-10-18-58-41](https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210410185841-2021-04-10-18-58-41.png)
<!--endsec-->

<!--sec data-title="执行程序示意图" data-id="section20210410185957" data-show=true ces-->

* 将程序从硬盘加载到主存中  

  ![20210410190039-2021-04-10-19-00-40](https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210410190039-2021-04-10-19-00-40.png)

* CPU 从主存中读取指令，执行指令并将结果输出到显示屏

  ![20210410190119-2021-04-10-19-01-19](https://cdn.jsdelivr.net/gh/Lijunjie9502/PicBed@master/20210410190119-2021-04-10-19-01-19.png)
<!--endsec-->

## 主存

* 存储单元的地址和内容
  * 存储器以字节 (8 bit) 为单位存储信息
  * 每个字节单元有一个地址，从 0 编号，顺序加 1
  * 地址用二进制数表示〈无符号整数，与成十六进制 )
  * 一个32位字要占用相继的四个字市
    * 低位字节存入低地址，高位字节存入高地址
  * 机器以字对齐地址访问〈读 / 写) 存储器
  * 字单元地址用它的低地址来表示
