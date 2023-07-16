(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1044:function(t,e,c){"use strict";c.r(e);var s=c(12),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"114-xv6线程切换（二）"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#114-xv6线程切换（二）"}},[t._v("#")]),t._v(" 11.4 XV6线程切换（二）")]),t._v(" "),c("p",[t._v("实际的线程切换流程会复杂的多。")]),t._v(" "),c("p",[t._v("假设我们有进程P1正在运行，进程P2是RUNABLE当前并不在运行。假设在XV6中我们有2个CPU核，这意味着在硬件层面我们有CPU0和CPU1。")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28467%29.png",alt:""}})]),t._v(" "),c("p",[t._v("我们从一个正在运行的用户空间进程切换到另一个RUNABLE但是还没有运行的用户空间进程的更完整的故事是：")]),t._v(" "),c("ol",[c("li",[t._v("首先与我之前介绍的一样，一个定时器中断强迫CPU从用户空间进程切换到内核，trampoline代码将用户寄存器保存于用户进程对应的trapframe对象中；")]),t._v(" "),c("li",[t._v("之后在内核中运行usertrap，来实际执行相应的中断处理程序。这时，CPU正在进程P1的内核线程和内核栈上，执行内核中普通的C代码；")]),t._v(" "),c("li",[t._v("假设进程P1对应的内核线程决定它想出让CPU，它会做很多工作，这个我们稍后会看，但是最后它会调用swtch函数（译注：switch 是C 语言关键字，因此这个函数命名为swtch 来避免冲突），这是整个线程切换的核心函数之一；")]),t._v(" "),c("li",[t._v("swtch函数会保存用户进程P1对应内核线程的寄存器至context对象。所以目前为止有两类寄存器：用户寄存器存在trapframe中，内核线程的寄存器存在context中。")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28458%29.png",alt:""}})]),t._v(" "),c("p",[t._v("但是，实际上swtch函数并不是直接从一个内核线程切换到另一个内核线程。XV6中，一个CPU上运行的内核线程可以直接切换到的是这个CPU对应的调度器线程。所以如果我们运行在CPU0，swtch函数会恢复之前为CPU0的调度器线程保存的寄存器和stack pointer，之后就在调度器线程的context下执行schedulder函数中（注，后面代码分析有介绍）。")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28504%29.png",alt:""}})]),t._v(" "),c("p",[t._v("在schedulder函数中会做一些清理工作，例如将进程P1设置成RUNABLE状态。之后再通过进程表单找到下一个RUNABLE进程。假设找到的下一个进程是P2（虽然也有可能找到的还是P1），schedulder函数会再次调用swtch函数，完成下面步骤：")]),t._v(" "),c("ol",[c("li",[t._v("先保存自己的寄存器到调度器线程的context对象")]),t._v(" "),c("li",[t._v("找到进程P2之前保存的context，恢复其中的寄存器")]),t._v(" "),c("li",[t._v("因为进程P2在进入RUNABLE状态之前，如刚刚介绍的进程P1一样，必然也调用了swtch函数。所以之前的swtch函数会被恢复，并返回到进程P2所在的系统调用或者中断处理程序中（注，因为P2进程之前调用swtch函数必然在系统调用或者中断处理程序中）。")]),t._v(" "),c("li",[t._v("不论是系统调用也好中断处理程序也好，在从用户空间进入到内核空间时会保存用户寄存器到trapframe对象。所以当内核程序执行完成之后，trapframe中的用户寄存器会被恢复。")]),t._v(" "),c("li",[t._v("最后用户进程P2就恢复运行了。")])]),t._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28493%29.png",alt:""}})]),t._v(" "),c("p",[t._v("每一个CPU都有一个完全不同的调度器线程。调度器线程也是一种内核线程，它也有自己的context对象。任何运行在CPU1上的进程，当它决定出让CPU，它都会切换到CPU1对应的调度器线程，并由调度器线程切换到下一个进程。")]),t._v(" "),c("p",[c("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28545%29.png",alt:""}})]),t._v(" "),c("blockquote",[c("p",[t._v("学生提问：context保存在哪？")]),t._v(" "),c("p",[t._v("Robert教授：每一个内核线程都有一个context对象。但是内核线程实际上有两类。每一个用户进程有一个对应的内核线程，它的context对象保存在用户进程对应的proc结构体中。")]),t._v(" "),c("p",[t._v("每一个调度器线程，它也有自己的context对象，但是它却没有对应的进程和proc结构体，所以调度器线程的context对象保存在cpu结构体中。在内核中，有一个cpu结构体的数组，每个cpu结构体对应一个CPU核，每个结构体中都有一个context字段。")]),t._v(" "),c("p",[t._v("学生提问：为什么不能将context对象保存在进程对应的trapframe中？")]),t._v(" "),c("p",[t._v("Robert教授：context可以保存在trapframe中，因为每一个进程都只有一个内核线程对应的一组寄存器，我们可以将这些寄存器保存在任何一个与进程一一对应的数据结构中。对于每个进程来说，有一个proc结构体，有一个trapframe结构体，所以我们可以将context保存于trapframe中。但是或许出于简化代码或者让代码更清晰的目的，trapframe还是只包含进入和离开内核时的数据。而context结构体中包含的是在内核线程和调度器线程之间切换时，需要保存和恢复的数据。")]),t._v(" "),c("p",[t._v("学生提问：出让CPU是由用户发起的还是由内核发起的？")]),t._v(" "),c("p",[t._v("Robert教授：对于XV6来说，并不会直接让用户线程出让CPU或者完成线程切换，而是由内核在合适的时间点做决定。有的时候你可以猜到特定的系统调用会导致出让CPU，例如一个用户进程读取pipe，而它知道pipe中并不能读到任何数据，这时你可以预测读取会被阻塞，而内核在等待数据的过程中会运行其他的进程。")]),t._v(" "),c("p",[t._v("内核会在两个场景下出让CPU。当定时器中断触发了，内核总是会让当前进程出让CPU，因为我们需要在定时器中断间隔的时间点上交织执行所有想要运行的进程。另一种场景就是任何时候一个进程调用了系统调用并等待I/O，例如等待你敲入下一个按键，在你还没有按下按键时，等待I/O的机制会触发出让CPU。")]),t._v(" "),c("p",[t._v("学生提问：用户进程调用sleep函数是不是会调用某个系统调用，然后将用户进程的信息保存在trapframe，然后触发进程切换，这时就不是定时器中断决定，而是用户进程自己决定了吧？")]),t._v(" "),c("p",[t._v("Robert教授：如果进程执行了read系统调用，然后进入到了内核中。而read系统调用要求进程等待磁盘，这时系统调用代码会调用sleep，而sleep最后会调用swtch函数。swtch函数会保存内核线程的寄存器到进程的context中，然后切换到对应CPU的调度器线程，再让其他的线程运行。这样在当前线程等待磁盘读取结束时，其他线程还能运行。所以，这里的流程除了没有定时器中断，其他都一样，只是这里是因为一个系统调用需要等待I/O（注，感觉答非所问）")]),t._v(" "),c("p",[t._v("学生提问：每一个CPU的调度器线程有自己的栈吗？")]),t._v(" "),c("p",[t._v("Robert教授：是的，每一个调度器线程都有自己独立的栈。实际上调度器线程的所有内容，包括栈和context，与用户进程不一样，都是在系统启动时就设置好了。如果你查看XV6的start.s文件，你就可以看到为每个CPU核设置好调度器线程。")])]),t._v(" "),c("p",[t._v("这里有一个术语需要解释一下。当人们在说context switching，他们通常说的是从一个线程切换到另一个线程，因为在切换的过程中需要先保存前一个线程的寄存器，然后再恢复之前保存的后一个线程的寄存器，这些寄存器都是保存在context对象中。在有些时候，context switching也指从一个用户进程切换到另一个用户进程的完整过程。偶尔你也会看到context switching是指从用户空间和内核空间之间的切换。对于我们这节课来说，context switching主要是指一个内核线程和调度器线程之间的切换。")]),t._v(" "),c("p",[t._v("这里有一些有用的信息可以记住。每一个CPU核在一个时间只会做一件事情，每个CPU核在一个时间只会运行一个线程，它要么是运行用户进程的线程，要么是运行内核线程，要么是运行这个CPU核对应的调度器线程。所以在任何一个时间点，CPU核并没有做多件事情，而是只做一件事情。线程的切换创造了多个线程同时运行在一个CPU上的假象。类似的每一个线程要么是只运行在一个CPU核上，要么它的状态被保存在context中。线程永远不会运行在多个CPU核上，线程要么运行在一个CPU核上，要么就没有运行。")]),t._v(" "),c("p",[t._v("在XV6的代码中，context对象总是由swtch函数产生，所以context总是保存了内核线程在执行swtch函数时的状态。当我们在恢复一个内核线程时，对于刚恢复的线程所做的第一件事情就是从之前的swtch函数中返回（注，有点抽象，后面有代码分析）。")]),t._v(" "),c("blockquote",[c("p",[t._v("学生提问：我们这里一直在说线程，但是从我看来XV6的实现中，一个进程就只有一个线程，有没有可能一个进程有多个线程？")]),t._v(" "),c("p",[t._v("Robert教授：我们这里的用词的确有点让人混淆。在XV6中，一个进程要么在用户空间执行指令，要么是在内核空间执行指令，要么它的状态被保存在context和trapframe中，并且没有执行任何指令。这里该怎么称呼它呢？你可以根据自己的喜好来称呼它，对于我来说，每个进程有两个线程，一个用户空间线程，一个内核空间线程，并且存在限制使得一个进程要么运行在用户空间线程，要么为了执行系统调用或者响应中断而运行在内核空间线程 ，但是永远也不会两者同时运行。")])])])}),[],!1,null,null,null);e.default=v.exports}}]);