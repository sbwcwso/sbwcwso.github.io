(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{1136:function(e,a,l){"use strict";l.r(a);var t=l(12),c=Object(t.a)({},(function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"225-flush-and-reload"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#225-flush-and-reload"}},[e._v("#")]),e._v(" 22.5 Flush and Reload")]),e._v(" "),l("p",[e._v("为什么Cache与Meltdown相关呢？接下来我将讨论一下"),l("a",{attrs:{href:"https://pdos.csail.mit.edu/6.828/2020/readings/meltdown.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("论文"),l("OutboundLink")],1),e._v("中使用Cache的主要方法。论文中讨论了这种叫做Flush and Reload的技术，这个技术回答了一个问题：一段特定的代码是否使用了特定内存地址的数据？这个技术本身并不是一个直接的安全漏洞，因为它只能基于你有权限的内存地址工作。")]),e._v(" "),l("p",[e._v("所以如果你是用户代码，你可以使用属于你的用户空间内存，并且你现在要调用一个你自己的函数，你可以使用Flush and Reload来知道你刚刚执行的函数是否使用了某个属于你自己的内存。你不能直接使用这种技术来获取其他进程的私有内存。进程之间有时候会共享内存，你还是可以访问这部分共享的内存。所以Flush and Reload回答了这个问题，特定的函数是否使用了特定内存地址？它的具体工作步骤如下：")]),e._v(" "),l("ol",[l("li",[e._v("第一步，假设我们对地址X感兴趣，我们希望确保Cache中并没有包含位于X的内存数据。实际中，为了方便，Intel提供了一条指令，叫做clflush，它接收一个内存地址作为参数，并确保该内存地址不在任何cache中。这超级方便，不过即使CPU并没有提供这样的指令，实际中也有方法能够删除Cache中的数据，举个例子，如果你知道Cache有64KB，那么你load 64KB大小的随机内存数据，这些数据会被加载到Cache中，这时Cache中原本的数据会被冲走，因为Cache只有64KB大小。所以即使没有这个好用的指令，你仍然可以清空Cache中的所有数据。")]),e._v(" "),l("li",[e._v("第二步，如果你对某段可能使用了内存地址X的代码感兴趣，你可以调用这个函数，先不管这个函数做了什么，或许它使用了内存地址X，或许没有。")]),e._v(" "),l("li",[e._v("现在，你想要知道X是否在Cache中，如果是的话，因为在第一步清空了Cache，必然是因为第二步的函数中load了这个内存地址。所以你现在想要执行load，但是你更想知道load花费了多长时间，而且我们这里讨论的是纳秒级别的时间，比如5个纳秒或者100个纳秒，那么我们该怎样达到这种测量精度呢？这是个困难的任务。Intel CPU会提供指令来向你返回CPU cycle的数量，这被称为rdtsc。所以这里我们会执行rdtsc指令，它会返回CPU启动之后总共经过了多少个CPU cycle。如果是2GHZ的CPU，这意味着通过这个指令我们可以得到0.5纳秒的测量精度。")]),e._v(" "),l("li",[e._v("现在我们会将内存地址X的数据加载到junk对象中。")]),e._v(" "),l("li",[e._v("然后再通过rdtsc读取时间。如果两次读取时间的差是个位数，那么上一步的load指令走到了cache中，也就是第二步的函数中使用了内存地址X的数据。如果两次读取时间的差别超过100，这意味着内存地址X不在cache中，虽然这并不绝对，但是这可能代表了第二步的函数中并没有使用内存X的数据。因为函数中可能使用了内存地址X，然后又用了其他与X冲突的数据，导致内存地址X又被从cache中剔除了。但是对于简单的情况，如果两次时间差较大那么第二步的函数没有使用内存地址X，如果两次时间差较小那么第二步函数使用了内存地址X。")])]),e._v(" "),l("p",[l("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28560%29.png",alt:""}})]),e._v(" "),l("p",[e._v("现在还没有涉及到攻击，因为这里我们需要能够访问到内存地址X，所以这是我们可以访问的内存地址。")]),e._v(" "),l("p",[e._v("以上就是有关Meltdown的前置知识。")])])}),[],!1,null,null,null);a.default=c.exports}}]);