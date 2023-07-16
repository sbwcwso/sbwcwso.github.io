(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{776:function(a,e,s){"use strict";s.r(e);var n=s(12),p=function(a){a.options.__data__block__={markmap_1a96284d:"- [自顶向下分析](/01.基础知识/20.编译原理/01.学习笔记/4.语法分析/01.自顶向下分析)\n  - [自顶向下分析概述](/pages/de9148/#自顶向下分析概述)\n    - [自顶向下的分析(Top-Down Parsing) 的特点](/pages/de9148/#自顶向下的分析top-down-parsing-的特点)\n    - [最左推导(Left-most Derivation)](/pages/de9148/#最左推导left-most-derivation)\n      - [最左句型](/pages/de9148/#最左句型)\n    - [自顶向下的语法分析采用最左推导方式](/pages/de9148/#自顶向下的语法分析采用最左推导方式)\n      - [自底向上分析采用最左规约](/pages/de9148/#自底向上分析采用最左规约)\n    - [自顶向下语法分析的通用形式](/pages/de9148/#自顶向下语法分析的通用形式)\n      - [递归下降分析](/pages/de9148/#递归下降分析)\n      - [预测分析](/pages/de9148/#预测分析)\n  - [文法转换](/pages/8d053f/#文法转换)\n    - [左递归文法](/pages/8d053f/#左递归文法)\n      - [问题： 左递归文法可能会使递归下降分析器陷入无限循环](/pages/8d053f/#问题-左递归文法可能会使递归下降分析器陷入无限循环)\n    - [消除直接左递归](/pages/8d053f/#消除直接左递归)\n      - [消除直接左递归的一般形式](/pages/8d053f/#消除直接左递归的一般形式)\n    - [消除间接左递归](/pages/8d053f/#消除间接左递归)\n    - [消除左递归的算法](/pages/8d053f/#消除左递归的算法)\n    - [提取左公因子](/pages/8d053f/#提取左公因子)\n      - [提取左公因子的算法](/pages/8d053f/#提取左公因子的算法)\n  - [LL(1) 文法](/pages/acf8bd/#ll1-文法)\n    - [产生式的可选集 -- SELECT 集](/pages/acf8bd/#产生式的可选集----select-集)\n      - [S_ 文法](/pages/acf8bd/#s_-文法)\n    - [非终结符的后继符号集 -- FOLLOW 集](/pages/acf8bd/#非终结符的后继符号集----follow-集)\n      - [q_ 文法](/pages/acf8bd/#q_-文法)\n    - [文法符号串的串首终结符集 -- FIRST 集](/pages/acf8bd/#文法符号串的串首终结符集----first-集)\n    - [LL(1)文法的定义](/pages/acf8bd/#ll1文法的定义)\n  - [FIRST 集与 FOLLOW 集的运算](/pages/5e8457/#first-集与-follow-集的运算)\n    - [FIRST 集的运算](/pages/5e8457/#first-集的运算)\n      - [计算文法符号 X 的 FIRST(X)](/pages/5e8457/#计算文法符号-x-的-firstx)\n      - [计算文法符号串的 FIRST 集合](/pages/5e8457/#计算文法符号串的-first-集合)\n    - [FOLLOW 集的运算](/pages/5e8457/#follow-集的运算)\n    - [计算 SELECT 集](/pages/5e8457/#计算-select-集)\n    - [预测分析表](/pages/5e8457/#预测分析表)\n  - [预测分析法](/pages/980aa3/#预测分析法)\n    - [递归的预测分析法](/pages/980aa3/#递归的预测分析法)\n    - [非递归的预测分析法](/pages/980aa3/#非递归的预测分析法)\n    - [递归的预测分析法与非递归的预测分析法对比](/pages/980aa3/#递归的预测分析法与非递归的预测分析法对比)\n    - [预测分析法的实现步骤⭐](/pages/980aa3/#预测分析法的实现步骤)\n    - [预测分析中的错误处理](/pages/980aa3/#预测分析中的错误处理)\n      - [错误处理的目的 ➕](/pages/980aa3/#错误处理的目的-)\n      - [错误检测](/pages/980aa3/#错误检测)\n      - [错误恢复](/pages/980aa3/#错误恢复)\n        - [恐慌模式](/pages/980aa3/#恐慌模式)\n\n- [自顶向上分析](/01.基础知识/20.编译原理/01.学习笔记/4.语法分析/02.自顶向上分析)\n  - [自底向上分析概述](/pages/86c477/#自底向上分析概述)\n    - [最右推导(Right-most Derivation, 规范推导)](/pages/86c477/#最右推导right-most-derivation-规范推导)\n      - [最右句型 (规范句型)](/pages/86c477/#最右句型-规范句型)\n    - [自顶向上的语法分析的特点](/pages/86c477/#自顶向上的语法分析的特点)\n    - [句柄的定义](/pages/86c477/#句柄的定义)\n    - [移入-归约分析](/pages/86c477/#移入-归约分析)\n  - [LR 分析法的概述](/pages/57a4e3/#lr-分析法的概述)\n    - [LR 分析法的定义](/pages/57a4e3/#lr-分析法的定义)\n    - [LR 分析法的基本原理](/pages/57a4e3/#lr-分析法的基本原理)\n    - [LR 分析器(自动机)的总体结构](/pages/57a4e3/#lr-分析器自动机的总体结构)\n    - [LR 分析表的结构](/pages/57a4e3/#lr-分析表的结构)\n    - [LR 分析器的工作过程](/pages/57a4e3/#lr-分析器的工作过程)\n    - [LR 分析算法](/pages/57a4e3/#lr-分析算法)\n  - [LR(0)分析](/pages/337560/#lr0分析)\n    - [相关定义](/pages/337560/#相关定义)\n      - [LR(0) 项目](/pages/337560/#lr0-项目)\n      - [增广文法](/pages/337560/#增广文法)\n      - [文法中的项目](/pages/337560/#文法中的项目)\n    - [LR(0) 分析表构造算法](/pages/337560/#lr0-分析表构造算法)\n      - [CLOSURE() 函数](/pages/337560/#closure-函数)\n      - [GOTO() 函数](/pages/337560/#goto-函数)\n      - [LR(0) 自动机的状态集](/pages/337560/#lr0-自动机的状态集)\n      - [LR(0) 自动机的形式化定义](/pages/337560/#lr0-自动机的形式化定义)\n      - [LR(0) 分析表构造算法的实现](/pages/337560/#lr0-分析表构造算法的实现)\n    - [LR(0) 分析过程中的冲突](/pages/337560/#lr0-分析过程中的冲突)\n    - [LR(0) 文法](/pages/337560/#lr0-文法)\n  - [SLR 分析](/pages/db0140/#slr-分析)\n    - [SLR 分析法的基本思想](/pages/db0140/#slr-分析法的基本思想)\n    - [SLR 分析表的构造算法](/pages/db0140/#slr-分析表的构造算法)\n    - [SLR 分析中的冲突](/pages/db0140/#slr-分析中的冲突)\n    - [SLR 文法](/pages/db0140/#slr-文法)\n  - [LR(1) 分析](/pages/d9a03e/#lr1-分析)\n    - [规范 LR(1) 项目](/pages/d9a03e/#规范-lr1-项目)\n    - [等价 LR(1) 项目](/pages/d9a03e/#等价-lr1-项目)\n    - [LR(1) 分析示例](/pages/d9a03e/#lr1-分析示例)\n    - [LR(1) 分析表构造算法](/pages/d9a03e/#lr1-分析表构造算法)\n      - [LR(1) 项目集闭包](/pages/d9a03e/#lr1-项目集闭包)\n      - [GOTO 函数](/pages/d9a03e/#goto-函数)\n      - [为文法 G' 构造LR(1)项集族](/pages/d9a03e/#为文法-g-构造lr1项集族)\n      - [LR(1) 自动机的形式化定义](/pages/d9a03e/#lr1-自动机的形式化定义)\n      - [LR(1) 分析表构造算法](/pages/d9a03e/#lr1-分析表构造算法-1)\n    - [LR(1) 文法](/pages/d9a03e/#lr1-文法)\n  - [LALR 分析法](/pages/f0c5a5/#lalr-分析法)\n    - [同心集的概念](/pages/f0c5a5/#同心集的概念)\n    - [LALR 分析的基本思想](/pages/f0c5a5/#lalr-分析的基本思想)\n    - [LALR(1) 分析中的冲突](/pages/f0c5a5/#lalr1-分析中的冲突)\n    - [LALR(1) 文法](/pages/f0c5a5/#lalr1-文法)\n    - [LALR(1) 的特点](/pages/f0c5a5/#lalr1-的特点)\n  - [二义性文法的LR分析](/pages/25b463/#二义性文法的lr分析)\n    - [二义性文法的特点](/pages/25b463/#二义性文法的特点)\n    - [二义性算术表达式文法的 LR 分析](/pages/25b463/#二义性算术表达式文法的-lr-分析)\n    - [二义性 `if` 语句文法的 LR 分析](/pages/25b463/#二义性-if-语句文法的-lr-分析)\n    - [二义性文法的使用原则](/pages/25b463/#二义性文法的使用原则)\n  - [LR分析中的错误处理](/pages/fff948/#lr分析中的错误处理)\n    - [LR 分析中的错误检测](/pages/fff948/#lr-分析中的错误检测)\n    - [恐慌模式错误恢复](/pages/fff948/#恐慌模式错误恢复)\n    - [短语层次错误恢复](/pages/fff948/#短语层次错误恢复)```"}},g=Object(n.a)({},(function(){var a=this.$createElement,e=this._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"语法分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[this._v("#")]),this._v(" 语法分析")]),this._v(" "),e("Markmap",{attrs:{id:"markmap_1a96284d",code:this.$dataBlock.markmap_1a96284d}})],1)}),[],!1,null,null,null);"function"==typeof p&&p(g);e.default=g.exports}}]);