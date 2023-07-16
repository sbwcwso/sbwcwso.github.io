(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1092:function(i,n,e){"use strict";e.r(n);var t=e(12),l=Object(t.a)({},(function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[e("h1",{attrs:{id:"181-monolithic-kernel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#181-monolithic-kernel"}},[i._v("#")]),i._v(" 18.1 Monolithic kernel")]),i._v(" "),e("p",[i._v("今天我主要会讨论微内核（Mircro kernel）。")]),i._v(" "),e("p",[i._v("我们来看一下为什么人们会研究微内核？微内核是人们在思考操作系统内核应该做什么事情的过程中设计出来的。比如说XV6是一个Unix系统，它按照Unix风格提供了各种功能，并提供了Unix系统调用。实现一个Unix系统就是我们设计XV6的目标。但是一个完全值得思考的问题是，一个操作系统内核本身应该具备什么功能？或许XV6和Linux具备的功能并不是一个完美操作系统应该有的功能，又或许是呢。我们现在正在讨论一个变化莫测的问题，内核可以看做是一种程序员的开发平台，而我们知道不同的程序员对于他们喜欢的开发平台有着非常不同的主观喜好，所以我们不能期望这个问题有一个完美的答案。但是我们可以仍然可以期望从思考这个问题的过程中学到一些东西，并且尝试想一下答案可能是什么。")]),i._v(" "),e("p",[i._v("首先，让我说明一下操作系统的传统实现方式以及应该具备的功能。我个人将Linux，Unix，XV6称为用传统方式实现的操作系统。另一个形容这些操作系统的词是monolithic。monolithic的意思是指操作系统内核是一个完成了各种事情的大的程序。实际上，这也反应了人们觉得内核应该具备什么样的功能。类似于Linux的典型操作系统内核提供了功能强大的抽象。它们选择提供例如文件系统这样一个极其复杂的组件，并且将文件，目录，文件描述符作为文件系统的接口，而不是直接将磁盘硬件作为接口暴露给应用程序。monolithic kernel通常拥有例如文件系统这样强大的抽象概念，这比提供一些简单的抽象有着巨大的优势。")]),i._v(" "),e("ul",[e("li",[i._v("其中一个好处是，这些高度抽象的接口通常是可移植的，你可以在各种各样的存储上实现文件和目录，你可以使用文件和目录而不用担心它们是运行在什么牌子的磁盘，什么类型的存储之上，或许是SSD，或许是HDD，或许是NFS，但是因为文件系统接口是高度抽象的，所以它们都拥有相同的接口。所以这里的一个好处是可以获取可移植性。你可以在不修改应用程序的前提下，将其运行在各种各样的硬件之上。")]),i._v(" "),e("li",[i._v("另一个例子是，Linux/Unix提供地址空间的抽象而不是直接访问MMU硬件的权限。这不仅可以提供可移植性，并且也可以向应用程序隐藏复杂性。所以操作系统具备强大抽象的另一个好处是，它们可以向应用程序隐藏复杂性。举个例子，XV6提供的文件描述符非常简单，你只需要对文件描述符调用read/write就可以，但是在XV6内核中是非常复杂的代码来实现读写磁盘上的文件系统。这对于程序员是极好的，但是内核却因此变得又大又复杂。")]),i._v(" "),e("li",[i._v("这里的强大的抽象还可以帮助管理共享资源。例如我们将内存管理委托给了内核，内核会跟踪哪些内存是空闲的。类似的，内核还会跟踪磁盘的哪个部分是空闲的，磁盘的哪个部分正在被使用，这样应用程序就不用考虑这些问题，所以这可以帮助简化应用程序。同时也可以提供健壮性和安全性，因为如果允许应用程序决定磁盘的某个位置是否是空闲的，那么应用程序或许可以使用一个已经被其他应用程序使用的磁盘位置。所以，内核管理硬件资源可以提供资源共享能力和安全性。但是同样的，这也使得内核变得更大。内核提供的这些诱人的抽象能力，使得内核包含了很多的复杂性，进而导致内核很大且复杂。")])]),i._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28474%29.png",alt:""}})]),i._v(" "),e("ul",[e("li",[i._v("有关monolithic kernel的另一个好处是，因为所有这些功能都在一个程序里面，所有的内核子系统，例如文件系统，内存分配，调度器，虚拟内存系统都是集成在一个巨大的程序中的一个部分，这意味着它们可以访问彼此的数据结构，进而使得依赖多个子系统的工具更容易实现。举个例子，exec系统调用依赖文件系统，因为它要从磁盘中读取二进制文件并加载到内存中，同时它也依赖内存分配和虚拟内存系统，因为它需要设置好新的进程的地址空间，但是它的实现是相对简单的。在XV6或者Linux中做到这些完全没问题，因为这些操作系统已经在内核程序中包含了文件系统和虚拟内存系统。但是如果严格分隔了文件系统和虚拟内存系统，那么实现类似exec的系统调用将会难得多。在一个monolithic操作系统中，因为本身就是一个大的程序，实现起来会容易的多。")]),i._v(" "),e("li",[i._v("另一个使得类似于XV6或者Linux的操作系统中可以更简单实现软件的原因是，内核的所有代码都以完整的硬件权限在运行。举个例子，整个XV6都运行在Supervisor mode，这意味着你可以读写任意内存地址，并且所有的内核代码都以最大的权限在运行。Linux操作系统也是这样。")])]),i._v(" "),e("p",[i._v("所以，monolithic kernel这种设计策略对于内核开发人员来说非常方便，并且也更容易构建更强大的抽象，进而对于应用程序开发人员来说也更容易。然而，对于传统的monolithic kernel，也有一些缺点。这也是之所以会出现其他内核架构，比如说微内核的原因。所以这里的问题是，为什么不在所有的场合使用monolithic kernel呢？")]),i._v(" "),e("ul",[e("li",[i._v("第一个原因是它们大且复杂。取决于你怎么计算，Linux总是有数十万到数百万行代码。Linux的一部分可以查看Linux的另一个部分的数据，的确使得编程更加容易，但是同样也使得内部代码有大量的交互和依赖。有的时候查看并弄明白Linux代码会有点挑战。任何时候你有了一个大的程序，尤其它们还具有复杂的结构，你都会有Bug，操作系统内核也不例外。在这些年，内核有过各种各样的Bug，包括了安全性相关的Bug。所以这是一个令人烦恼的关系图，如果你使用了大的内核，你不可避免的会遇到Bug和安全漏洞。")])]),i._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28484%29.png",alt:""}})]),i._v(" "),e("ul",[e("li",[i._v("另一个人们不喜欢monolithic kernel的原因是，随着时间的推移，它们倾向于发展成拥有所有的功能。Linux应用在各种场合中，从移动电话到桌面工作站，从笔记本电脑到平板电脑，从服务器到路由器。Linux可以支持这么多设备是极好的，但是这也使得Linux非常的通用，所以Linux支持了很多很多不同的东西。而任何一个应用程序，例如我的web server程序不太会需要用到Linux中非常复杂的声卡支持。所以，Linux中包含了大量的内容使得它很通用，这很好，但是另一方面，通用就意味着慢。对于各种不同的场景都能支持，或许就不能对某些特定场景进行优化。当你尝试快速运行一些程序时，如果程序只做一两件事情是极好的，因为这样你就可以专注在优化一两个代码路径上。但是如果你的程序想要做上千件事情，优化会更加难。Linux并不一定慢，但是你或许会想，它真的在所有场景下都达到了最快速度吗？如果你去看Linux或者XV6中的任何模块，你或许会想它们真的有必要去做所有的事情吗？例如，你从一个进程向一个Pipe写一个字节传输到另一个进程，即使在XV6这样一个简单的内核中，都有大量的指令需要被执行。这里有buffering，locking，或许在Pipe的读写中有sleep/wakeup，或许有线程调度导致context switching，对于从一个进程移动一个字节到另一个进程来说，这里有大量的内容或许并不是必须的。")])]),i._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28532%29.png",alt:""}})]),i._v(" "),e("ul",[e("li",[i._v("对于monolithic kernel来说，另一个潜在的问题是，因为它们是如此之大，它们会削弱一些复杂的抽象能力。在内核中会有大量的设计考虑，应用程序需要遵守这些设计并与之共存。反之，在一个理想世界中，应用程序或许可以做更多的决定。举个例子，在Unix中，你可以wait子进程，比如说你fork出来的子进程，但是你不能wait其他进程（注，详见13.7），或许你会想要wait孙子进程或者一个不相关的进程，但是这是不可能的。或许你会想要更改其他进程的地址空间，比如说替其它受你控制的进程调用mmap，但是这也不可能。mmap只能修改你自己的地址空间，但是不能修改其他进程的地址空间。或许你是个数据库，你在磁盘上有B树索引，你或许知道很多快速展开B树的方法，但是当你读写文件系统中的文件时，文件系统并不知道你正在读写一个B树，以及如何更快的在磁盘上展开B树。所以如果你是个数据库的话，你或许很高兴文件系统可以任你摆布，但是文件系统并不会按照你想要的方式工作。以上就是内核中需要考虑的设计。")])]),i._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28862%29.png",alt:""}})]),i._v(" "),e("ul",[e("li",[i._v("monolithic kernel的最后一个问题是，可扩展性（Extensibility）。应用程序或许想要实时更改内核，比如说向内核下载代码并更改内核的工作方式，这样数据库或许就可以更改数据在磁盘上的分布方式。至少在10年前，monolithic kernel没有任何功能可以支持这里的Extensibility，你只能使用内核提供的能力。")])]),i._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28866%29.png",alt:""}})]),i._v(" "),e("p",[i._v("以上就是人们认为的monolithic kernel的问题。这些问题使得人们去思考操作系统的其他架构。这里有很多不同的想法，其中一些想法非常的激进，我们今天只会讨论其中的一种，也是现在非常流行的一种，这就是微内核，Micro kernel。")])])}),[],!1,null,null,null);n.default=l.exports}}]);