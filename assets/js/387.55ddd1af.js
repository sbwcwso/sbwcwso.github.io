(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1072:function(o,t,e){"use strict";e.r(t);var l=e(12),i=Object(l.a)({},(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[e("h1",{attrs:{id:"157-log写磁盘流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#157-log写磁盘流程"}},[o._v("#")]),o._v(" 15.7 Log写磁盘流程")]),o._v(" "),e("p",[o._v('我已经在bwrite函数中加了一个print语句。bwrite函数是block cache中实际写磁盘的函数，所以我们将会看到实际写磁盘的记录。在上节课（Lec 14）我将print语句放在了log_write中，log_write只能代表文件系统操作的记录，并不能代表实际写磁盘的记录。我们这里会像上节课一样执行echo "hi" > x，并看一下实际的写磁盘过程。')]),o._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28661%29.png",alt:""}})]),o._v(" "),e("p",[o._v("很明显这里的记录要比只在log_write中记录要长的多。之前的log_write只有11条记录（注，详见14.5）但是可以看到实际上背后有很多个磁盘写操作，让我们来分别看一下这里的写磁盘操作：")]),o._v(" "),e("ul",[e("li",[o._v("首先是前3行的bwrite 3，4，5。因为block 3是第一个log data block，所以前3行是在log中记录了3个写操作。这3个写操作都保存在log中，并且会写入到磁盘中的log部分。")]),o._v(" "),e("li",[o._v("第4行的bwrite 2。因为block 2是log的起始位置，也就是log header，所以这条是commit记录。")]),o._v(" "),e("li",[o._v("第5，6，7行的bwrite 33，46，32。这里实际就是将前3行的log data写入到实际的文件系统的block位置，这里实际是install log。")]),o._v(" "),e("li",[o._v("第8行的bwrite 2，是清除log（注，也就是将log header中的n设置为0）。到此为止，完成了实际上的写block 33，46，32这一系列的操作。第一部分是log write，第二部分是install log，每一部分后面还跟着一个更新commit记录（注，也就是commit log和clean log）。")])]),o._v(" "),e("blockquote",[e("p",[o._v("学生提问：可以从这里的记录找到一次文件操作的begin_op和end_op位置吗？")]),o._v(" "),e("p",[o._v("Frans教授：大概可以知道。我们实际上不知道begin_op的位置，但是所有的文件系统操作都从begin_op开始。更新commit记录必然在end_op中，所以我们可以找到文件系统操作的end_op位置，之后就是begin_op（注，其实这里所有的操作都在end_op中，只需要区分每一次end_op的调用就可以找到begin_op）。")])]),o._v(" "),e("p",[o._v("所以以上就是XV6中文件系统的logging介绍，即使是这么一个简单的logging系统也有一定的复杂度。这里立刻可以想到的一个问题是，通过观察这些记录，这是一个很有效的实现吗？很明显不是的，因为数据被写了两次。如果我写一个大文件，我需要在磁盘中将这个大文件写两次。所以这必然不是一个高性能的实现，为了实现Crash safety我们将原本的性能降低了一倍。当你们去读ext3论文时，你们应该时刻思考如何避免这里的性能降低一倍的问题。")])])}),[],!1,null,null,null);t.default=i.exports}}]);