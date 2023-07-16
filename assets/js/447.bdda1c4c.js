(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1133:function(e,t,r){"use strict";r.r(t);var a=r(12),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"223-speculative-execution2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#223-speculative-execution2"}},[e._v("#")]),e._v(" 22.3 Speculative execution(2)")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28873%29%20%282%29%20%282%29.png",alt:""}})]),e._v(" "),r("p",[e._v("如果r0中的内存地址是无效的，且在Page Table中完全没有映射关系，那么我也不知道会发生什么。如果r0中的内存地址在Page Table中存在映射关系，只是现在权限不够，比如说pte_u标志位为0，那么Intel的CPU会加载内存地址对应的数据，并存储在r2寄存器的临时版本中。之后r2寄存器的临时版本可以被代码第5行使用。所以尽管r0中的内存地址是我们没有权限的内存，比如说一个内核地址，它的数据还是会被加载到r2，之后再加1并存储在r3中。之后，当代码第4行Retired时，CPU会发现这是一个无效的读内存地址行为，因为PTE不允许读取这个内存地址。这时CPU会产生Page Fault取消执行后续指令，并回撤对于r2和r3寄存器的修改。")]),e._v(" "),r("p",[e._v("所以，在这里的例子中，CPU进行了两个推测：一个是CPU推测了if分支的走向，并选择了一个分支提前执行；除此之外，CPU推测了代码第4行能够成功完成。对于load指令，如果数据在CPU缓存中且相应的PTE存在于Page Table，不论当前代码是否有权限，Intel CPU总是能将数据取出。如果没有权限，只有在代码第4行Retired的时候，才会生成Page Fault，并导致预测执行被取消。")]),e._v(" "),r("blockquote",[r("p",[e._v("学生提问：我对CPU的第二个预测，也就是从r0中保存的内存地址加载数据有一些困惑，这是不是意味着r0对应的数据先被加载到了r2，然后再检查PTE的标志位？")]),e._v(" "),r("p",[e._v("Robert教授：完全正确。在预测的阶段，不论r0指向了什么地址，只要它指向了任何东西，内存中的数据会被加载到r2中。之后，当load指令Retired时才会检查权限。如果我们并没有权限做操作，所有的后续指令的效果会被取消，也就是对于寄存器的所有修改会回滚。同时，Page Fault会被触发，同时寄存器的状态就像是预测执行的指令没有执行过一样。")]),e._v(" "),r("p",[e._v("学生提问：难道不能限制CPU在Speculative execution的时候，先检查权限，再执行load指令吗？看起来我们现在的问题就是我们在不知道权限的情况下读取了内存，如果我们能先知道权限，那么Speculative execution能不能提前取消？")]),e._v(" "),r("p",[e._v("Robert教授：这里有两个回答。首先，Intel芯片并不是这样工作的。其次，是的，我相信对于Intel来说如果先做权限检查会更简单，这样的话，在上面的例子中，r2寄存器就不会被修改。")]),e._v(" "),r("p",[e._v("你们或许注意到论文中提到，尽管AMD CPU的手册与Intel的一样，它们有相同的指令集，Meltdown Attack并不会在AMD CPU上生效。普遍接受的观点是，AMD CPU在Speculative execution时，如果没有权限读取内存地址，是不会将内存地址中的数据读出。这就是为什么Meltdown Attack在AMD CPU上不生效的原因。最近的Intel CPU明显也采用了这种方法，如果程序没有权限，在Speculative execution的时候也不会加载内存数据。")]),e._v(" "),r("p",[e._v("这里使用哪种方式对于性能来说没有明显区别，或许在指令Retired的时候再检查权限能省一些CPU的晶体管吧。这里我要提醒一下，这里有很多内容都是猜的，不过我认为我说的都是对的。Intel和AMD并没有太披露具体的细节。")])]),e._v(" "),r("p",[e._v("这里有一些重要的术语。你可以从CPU手册中读到的，比如说一个add指令接收两个寄存器作为参数，并将结果存放在第三个寄存器，这一类设计被称为CPU的Architectural，或者通告的行为。如果你读取一个你没有权限的内存地址，你会得到一个Page Fault，你不允许读取这个内存地址，这就是一种通告的行为。CPU的实际行为被称作Micro-Architectural，CPU的通告行为与实际行为是模糊不清的。比如说CPU会悄悄的有Speculative execution。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28874%29.png",alt:""}})]),e._v(" "),r("p",[e._v("CPU设计者在设计Micro-Architectural时的初衷是为了让它是透明的。的确有很多行为都发生在CPU内部，但是结果看起来就像是CPU完全按照手册在运行。举个例子，在上面代码的第4行，或许Intel的CPU在读取内存时没有检查权限，但是如果权限有问题的话，在指令Retired的时候，所有的效果都会回滚，你永远也看不到你不该看到的内存内容。所以看起来就跟CPU的手册一样，你不允许读取你没有权限的内存地址。这里Architectural和Micro-Architectural的区别是Meltdown Attack的主要攻击点。这里的攻击知道CPU内部是如何工作的。")])])}),[],!1,null,null,null);t.default=l.exports}}]);