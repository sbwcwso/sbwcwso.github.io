---
author: 
  name: 木子识时务
  link: https://github.com/sbwcwso
editLink: true
title: 词法分析
date: 2021-07-27 05:48:01
permalink: null
categories: 
  - null
tags: 
  - null
---

# 词法分析

```markmap
- [正则表达式](/pages/9ce251/#正则表达式)
  - [正则表达式的定义](/pages/9ce251/#正则表达式的定义)
  - [正则表达式的性质](/pages/9ce251/#正则表达式的性质)
  - [正则表达式的代数定律](/pages/9ce251/#正则表达式的代数定律)
- [正则定义](/pages/4ae0ef/#正则定义)
  - [正则定义的形式](/pages/4ae0ef/#正则定义的形式)
  - [正则定义的实例](/pages/4ae0ef/#正则定义的实例)
- [有穷自动机](/pages/1fc3c9/#有穷自动机)
  - [有穷自动机(FA)的基本定义](/pages/1fc3c9/#有穷自动机-fa-的基本定义)
  - [FA 模型](/pages/1fc3c9/#fa-模型)
  - [FA 的表示: 转换图 (Transition Graph)](/pages/1fc3c9/#fa-的表示-转换图-transition-graph)
  - [FA定义（接收）的语言](/pages/1fc3c9/#fa定义-接收-的语言)
  - [最长子串匹配原则(Longest String Matching Principle)](/pages/1fc3c9/#最长子串匹配原则-longest-string-matching-principle)
- [有穷自动机的分类](/pages/8a7102/#有穷自动机的分类)
  - [确定的有穷自动机 (DFA)](/pages/8a7102/#确定的有穷自动机-dfa)
    - [DFA 的算法实现](/pages/8a7102/#dfa-的算法实现)
  - [非确定的有穷自动机 (NFA)](/pages/8a7102/#非确定的有穷自动机-nfa)
  - [DFA 和 NFA 的等价性](/pages/8a7102/#dfa-和-nfa-的等价性)
  - [带有“ε-边”的NFA](/pages/8a7102/#带有-ε-边-的nfa)
    - [带有和不带有“ε-边”的NFA 的等价性](/pages/8a7102/#带有和不带有-ε-边-的nfa-的等价性)
- [从正则表达式到有穷自动机](/pages/e2d29c/#从正则表达式到有穷自动机)
  - [NFA 和 DFA 的特点](/pages/e2d29c/#nfa-和-dfa-的特点)
  - [根据 RE 构造 NFA](/pages/e2d29c/#根据-re-构造-nfa)
  - [从 NFA 到 DFA 的转换](/pages/e2d29c/#从-nfa-到-dfa-的转换)
- [从NFA到DFA的转换](/pages/92730d/#从nfa到dfa的转换)
  - [转换原理](/pages/92730d/#转换原理)
  - [子集构造法](/pages/92730d/#子集构造法)
- [识别单词的 DFA](/pages/54ce5b/#识别单词的-dfa)
  - [识别标识符的 DFA](/pages/54ce5b/#识别标识符的-dfa)
  - [识别无符号数的 DFA](/pages/54ce5b/#识别无符号数的-dfa)
  - [识别各进制无符号整数的 DFA](/pages/54ce5b/#识别各进制无符号整数的-dfa)
  - [识别注释的 DFA](/pages/54ce5b/#识别注释的-dfa)
  - [识别 Token 的 DFA](/pages/54ce5b/#识别-token-的-dfa)
```
