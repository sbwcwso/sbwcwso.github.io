(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1029:function(t,e,r){"use strict";r.r(e);var n=r(12),p=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"99-interrupt的演进"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#99-interrupt的演进"}},[t._v("#")]),t._v(" 9.9 Interrupt的演进")]),t._v(" "),r("p",[t._v("最后我想介绍一下Interrupt在最近几十年的演进。当Unix刚被开发出来的时候，Interrupt处理还是很快的。这使得硬件可以很简单，当外设有数据需要处理时，硬件可以中断CPU的执行，并让CPU处理硬件的数据。")]),t._v(" "),r("p",[t._v("而现在，中断相对处理器来说变慢了。从前面的介绍可以看出来这一点，需要很多步骤才能真正的处理中断数据。如果一个设备在高速的产生中断，处理器将会很难跟上。所以如果查看现在的设备，可以发现，现在的设备相比之前做了更多的工作。所以在产生中断之前，设备上会执行大量的操作，这样可以减轻CPU的处理负担。所以现在硬件变得更加复杂。")]),t._v(" "),r("p",[t._v("如果你有一个高性能的设备，例如你有一个千兆网卡，这个网卡收到了大量的小包，网卡每秒可以生成1.5Mpps，这意味着每一个微秒，CPU都需要处理一个中断，这就超过了CPU的处理能力。那么当网卡收到大量包，并且处理器不能处理这么多中断的时候该怎么办呢？")]),t._v(" "),r("p",[t._v("这里的解决方法就是使用polling。除了依赖Interrupt，CPU可以一直读取外设的控制寄存器，来检查是否有数据。对于UART来说，我们可以一直读取RHR寄存器，来检查是否有数据。现在，CPU不停的在轮询设备，直到设备有了数据。")]),t._v(" "),r("p",[t._v("这种方法浪费了CPU cycles，当我们在使用CPU不停的检查寄存器的内容时，我们并没有用CPU来运行任何程序。在我们之前的例子中，如果没有数据，内核会让Shell进程sleep，这样可以运行另一个进程。")]),t._v(" "),r("p",[t._v("所以，对于一个慢设备，你肯定不想一直轮询它来得到数据。我们想要在没有数据的时候切换出来运行一些其他程序。但是如果是一个快设备，那么Interrupt的overhead也会很高，那么我们在polling设备的时候，是经常能拿到数据的，这样可以节省进出中断的代价。")]),t._v(" "),r("p",[t._v("所以对于一个高性能的网卡，如果有大量的包要传入，那么应该用polling。对于一些精心设计的驱动，它们会在polling和Interrupt之间动态切换（注，也就是网卡的NAPI）。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28398%29.png",alt:""}})])])}),[],!1,null,null,null);e.default=p.exports}}]);