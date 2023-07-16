(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1061:function(t,e,v){"use strict";v.r(e);var s=v(12),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"141-why-interesting"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#141-why-interesting"}},[t._v("#")]),t._v(" 14.1 Why Interesting")]),t._v(" "),v("p",[t._v("今天介绍的是文件系统。实际上我们会花三节课的时间来学习文件系统。前两节课基于XV6来做介绍，第三节课基于Linux来做介绍。实际上，这将是有关XV6的最后一个话题，在这周之后我们就讲完了XV6。")]),t._v(" "),v("p",[t._v("对于文件系统，你们都知道它并使用过它。它是操作系统中除了shell以外最常见的用户接口。所以我们希望通过这几节课来理解：文件系统的背后究竟是什么原理，文件系统是如何实现的。这些内容还是让人有些小激动，因为你们一直都在使用文件系统。")]),t._v(" "),v("p",[t._v("或许在深入到任何一个细节之前，你会想要从一个问题开始：既然你每天都使用了文件系统，XV6的文件系统与你正在使用的文件系统有什么区别。接下来我会点名：")]),t._v(" "),v("blockquote",[v("p",[t._v("学生回答：其中一点是，XV6支持的文件大小远小于其他文件系统。其次一些文件的文件名也较短。第三点，我不认为XV6的文件系统有copy-on-write。")]),t._v(" "),v("p",[t._v("Frans教授：很好，那有什么相似的地方吗？")]),t._v(" "),v("p",[t._v("学生回答：基本的结构是类似的，比如说都有文件名，都有inode，目录等等。")]),t._v(" "),v("p",[t._v("Fans教授：很好，我再问一个同学，XV6的文件系统与你正在使用的文件系统有什么异同？")]),t._v(" "),v("p",[t._v("学生回答：文件目录结构都是层级的。")])]),t._v(" "),v("p",[t._v("接下来让我列出一些文件系统突出的特性：")]),t._v(" "),v("ul",[v("li",[t._v("其中一点刚刚有同学提到了，就是对于用户友好的文件名，具体来说就是层级的路径名，这可以帮助用户组织目录中的文件。")]),t._v(" "),v("li",[t._v("通过将文件命名成方便易记的名字，可以在用户之间和进程之间更简单的共享文件。")]),t._v(" "),v("li",[t._v("相比我们已经看过的XV6其他子系统，这一点或许是最重要的，文件系统提供了持久化。这意味着，我可以关闭一个计算机，过几天再开机而文件仍然在那，我可以继续基于文件工作。这一点与进程和其他资源不一样，这些资源在计算机重启时就会消失，之后你需要重新启动它们，但是文件系统就可以提供持久化。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28585%29.png",alt:""}})]),t._v(" "),v("p",[t._v("所以你们都使用了文件系统，接下来几节课我们将学习它内部是如何工作的。出于以下原因，文件系统背后的机制还比较有意思：")]),t._v(" "),v("ul",[v("li",[t._v("文件系统对硬件的抽象较为有用，所以理解文件系统对于硬件的抽象是如何实现的还是有点意思的。")]),t._v(" "),v("li",[t._v("除此之外，还有个关键且有趣的地方就是crash safety。有可能在文件系统的操作过程中，计算机崩溃了，在重启之后你的文件系统仍然能保持完好，文件系统的数据仍然存在，并且你可以继续使用你的大部分文件。如果文件系统操作过程中计算机崩溃了，然后你重启之后文件系统不存在了或者磁盘上的数据变了，那么崩溃的将会是你。所以crash safety是一个非常重要且经常出现的话题，我们下节课会专门介绍它。")]),t._v(" "),v("li",[t._v("之后是一个通用的问题，如何在磁盘上排布文件系统。例如目录和文件，它们都需要以某种形式在磁盘上存在，这样当你重启计算机时，所有的数据都能恢复。所以在磁盘上有一些数据结构表示了文件系统的结构和内容。在XV6中，使用的数据结构非常简单，因为XV6是专门为教学目的创建的。真实的文件系统通常会更加复杂。但是它们都是磁盘上保存的数据结构，我们在今天的课程会重点看这部分。")]),t._v(" "),v("li",[t._v("最后一个有趣的话题是性能。文件系统所在的硬件设备通常都较慢，比如说向一个SSD磁盘写数据将会是毫秒级别的操作，而在一个毫秒内，计算机可以做大量的工作，所以尽量避免写磁盘很重要，我们将在几个地方看到提升性能的代码。比如说，所有的文件系统都有buffer cache或者叫block cache。同时这里会有更多的并发，比如说你正在查找文件路径名，这是一个多次交互的操作，首先要找到文件结构，然后查找一个目录的文件名，之后再去查找下一个目录等等。你会期望当一个进程在做路径名查找时，另一个进程可以并行的运行。这样的并行运行在文件系统中将会是一个大的话题。")])]),t._v(" "),v("p",[t._v("除此之外，你会对文件系统感兴趣是因为这是接下来两个lab的内容。下一个lab完全关注在文件系统，下下个lab结合了虚拟内存和文件系统。即使是这周的lab，也会尝试让buffer cache可以支持更多的并发。所以这就是为什么文件系统是有趣的。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28586%29.png",alt:""}})])])}),[],!1,null,null,null);e.default=_.exports}}]);