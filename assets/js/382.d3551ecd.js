(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1067:function(t,e,o){"use strict";o.r(e);var i=o(12),c=Object(i.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"152-file-system-crash示例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#152-file-system-crash示例"}},[t._v("#")]),t._v(" 15.2 File system crash示例")]),t._v(" "),o("p",[t._v("为了更清晰的理解这里的风险，让我们看一些基于XV6的例子，并看一下哪里可能出错。我们在上节课介绍了XV6有一个非常简单的文件系统和磁盘数据的排布方式。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28635%29.png",alt:""}})]),t._v(" "),o("p",[t._v("在super block之后就是log block，我们今天主要介绍的就是log block。log block之后是inode block，每个block可能包含了多个inode。之后是bitmap block，它记录了哪个data block是空闲的。最后是data block，这里包含了文件系统的实际数据。")]),t._v(" "),o("p",[t._v("在上节课中，我们看了一下在创建文件时，操作系统与磁盘block的交互过程（注，详见14.5）：")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28649%29.png",alt:""}})]),t._v(" "),o("p",[t._v("从上面可以看出，创建一个文件涉及到了多个操作：")]),t._v(" "),o("ul",[o("li",[t._v("首先是分配inode，因为首先写的是block 33")]),t._v(" "),o("li",[t._v("之后inode被初始化，然后又写了一次block 33")]),t._v(" "),o("li",[t._v("之后是写block 46，是将文件x的inode编号写入到x所在目录的inode的data block中")]),t._v(" "),o("li",[t._v("之后是更新root inode，因为文件x创建在根目录，所以需要更新根目录的inode的size字段，以包含这里新创建的文件x")]),t._v(" "),o("li",[t._v("最后再次更新了文件x的inode")])]),t._v(" "),o("p",[t._v("现在我们想知道，哪里可能出错。假设我们在下面这个位置出现了电力故障或者内核崩溃。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28632%29.png",alt:""}})]),t._v(" "),o("p",[t._v("在出现电力故障之后，因为内存数据保存在RAM中，所有的内存数据都丢失了。所有的进程数据，所有的文件描述符，内存中所有的缓存都没有了，因为内存数据不是持久化的。我们唯一剩下的就是磁盘上的数据，因为磁盘的介质是持久化的，所以只有磁盘上的数据能够在电力故障之后存活。基于这些事实，如果我们在上面的位置出现故障，并且没有额外的机制，没有logging，会有多糟糕呢？我们这里会有什么风险？")]),t._v(" "),o("p",[t._v("在这个位置，我们先写了block 33表明inode已被使用，之后出现了电力故障，然后计算机又重启了。这时，我们丢失了刚刚分配给文件x的inode。这个inode虽然被标记为已被分配，但是它并没有放到任何目录中，所以也就没有出现在任何目录中，因此我们也就没办法删除这个inode。所以在这个位置发生电力故障会导致我们丢失inode。")]),t._v(" "),o("p",[t._v("你或许会认为，我们应该改一改代码，将写block的顺序调整一下，这样就不会丢失inode了。所以我们可以先写block 46来更新目录内容，之后再写block 32来更新目录的size字段，最后再将block 33中的inode标记为已被分配。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28622%29.png",alt:""}})]),t._v(" "),o("p",[t._v("这里的效果是一样的，只是顺序略有不同。并且这样我们应该可以避免丢失inode的问题。那么问题来了，这里可以工作吗？我们应该问问自己，如果在下面的位置发生了电力故障会怎样？")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28652%29.png",alt:""}})]),t._v(" "),o("p",[t._v("在这个位置，目录被更新了，但是还没有在磁盘上分配inode（有个问题，如果inode没分配的话，write 46的时候写的是啥）。电力故障之后机器重启，文件系统会是一个什么状态？或者说，如果我们读取根目录下的文件x，会发生什么，因为现在在根目录的data block已经有了文件x的记录？")]),t._v(" "),o("p",[t._v("是的，我们会读取一个未被分配的inode，因为inode在crash之前还未被标记成被分配。更糟糕的是，如果inode之后被分配给一个不同的文件，这样会导致有两个应该完全不同的文件共享了同一个inode。如果这两个文件分别属于用户1和用户2，那么用户1就可以读到用户2的文件了。所以上面的解决方案也不好。")]),t._v(" "),o("p",[t._v("所以调整写磁盘的顺序并不能彻底解决我们的问题，我们只是从一个问题换到了一个新的问题。")]),t._v(" "),o("p",[t._v("让我们再看一个例子，这个例子中会向文件x写入“hi”（注，也就是14.5介绍的第二个部分）")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28638%29.png",alt:""}})]),t._v(" "),o("p",[t._v("一旦成功的创建了文件x，之后会调用write系统调用，我们在上节课看到了write系统调用也执行了多个写磁盘的操作。")]),t._v(" "),o("ul",[o("li",[t._v("首先会从bitmap block，也就是block 45中，分配data block，通过从bitmap中分配一个bit，来表明一个data block已被分配。")]),t._v(" "),o("li",[t._v("上一步分配的data block是block 595，这里将字符“h”写入到block 595。")]),t._v(" "),o("li",[t._v("将字符“i”写入到block 595。")]),t._v(" "),o("li",[t._v("最后更新文件夹x的inode来更新size字段。")])]),t._v(" "),o("p",[t._v("这里我们也可以问自己一个问题，我们在下面的位置crash了会怎样？")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28625%29.png",alt:""}})]),t._v(" "),o("p",[t._v("这里我们从bitmap block中分配了一个data block，但是又还没有更新到文件x的inode中。当我们重启之后，磁盘处于一个特殊的状态，这里的风险是什么？是的，我们这里丢失了data block，因为这个data block被分配了，但是却没有出现在任何文件中，因为它还没有被记录在任何inode中。")]),t._v(" "),o("p",[t._v("你或许会想，是因为这里的顺序不对才会导致丢失data block的问题。我们应该先写block 33来更新inode来包含data block 595（同样的问题，这个时候data block都还没有分配怎么知道是595），之后才通过写block 45将data block 595标记为已被分配。")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28647%29.png",alt:""}})]),t._v(" "),o("p",[t._v("所以，为了避免丢失data block，我们将写block的顺序改成这样。现在我们考虑一下，如果故障发生在这两个操作中间会怎样？")]),t._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28627%29.png",alt:""}})]),t._v(" "),o("p",[t._v("这时inode会认为data block 595属于文件x，但是在磁盘上它还被标记为未被分配的。之后如果另一个文件被创建了，block 595可能会被另一个文件所使用。所以现在两个文件都会在自己的inode中记录block 595。如果两个文件属于两个用户，那么两个用户就可以读写彼此的数据了。很明显，我们不想这样，文件系统应该确保每一个data block要么属于且只属于一个文件，要么是空闲的。所以这里的修改会导致磁盘block在多个文件之间共享的安全问题，这明显是错误的。")]),t._v(" "),o("p",[t._v("所以这里的问题并不在于操作的顺序，而在于我们这里有多个写磁盘的操作，这些操作必须作为一个原子操作出现在磁盘上。")])])}),[],!1,null,null,null);e.default=c.exports}}]);