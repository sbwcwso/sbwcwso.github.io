(window.webpackJsonp=window.webpackJsonp||[]).push([[458],{1145:function(e,c,r){"use strict";r.r(c);var t=r(12),_=Object(t.a)({},(function(){var e=this,c=e.$createElement,r=e._self._c||c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"236-rcu用例代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#236-rcu用例代码"}},[e._v("#")]),e._v(" 23.6 RCU用例代码")]),e._v(" "),r("p",[e._v("为了巩固前面介绍的内容，接下来看一段使用了RCU的简单代码。上半段是读取被RCU保护的链表 ，下半段代码是替换链表的第一个元素。")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28712%29.png",alt:""}})]),e._v(" "),r("p",[e._v("数据读取位于rcu_read_lock和rcu_read_unlock之间，这两个函数几乎不做任何事情。rcu_read_lock会设置一个标志位，表明如果发生了定时器中断，请不要执行context switch，因为接下来要进入RCU critical区域。所以rcu_read_lock会设置一个标志位来阻止定时器中断导致的context switch，中断或许还会发生，但是不会导致context switch（注，也就是线程切换）。rcu_read_unlock会取消该标志位。所以这是一个集成在RCU critical区域的计数器。rcu_read_lock和rcu_read_unlock因为几乎不做任何工作所以极其的快（注，这里有个问题，23.2中描述的读写锁慢的原因是因为在读数据的时候引入了写计数器的操作，这里同样也是需要额外的写操作，为什么这里不会有问题？这是因为读写锁的计数器是所有CPU共享的，而这里的标志位是针对每个CPU的，所以修改这里的标志位并不会引起CPU之间的缓存一致消息）。")]),e._v(" "),r("p",[e._v("其中的while循环会扫描链表，rcu_dereference函数会插入memory barrier，它首先会从内存中拷贝e，触发一个memory barrier，之后返回指向e的指针。之后我们就可以读取e指针指向的数据内容，并走向下一个链表元素。数据读取部分非常简单。")]),e._v(" "),r("p",[e._v("数据写入部分更复杂点。")]),e._v(" "),r("ul",[r("li",[e._v("RCU并不能帮助数据写入者之间避免相互干扰，所以必须有一种方法能确保一次只能有一个数据写入者更新链表。这里我们假设我们将使用普通的spinlock，所以最开始数据写入者获取锁。")]),e._v(" "),r("li",[e._v("如果我们要替换链表的第一个元素，我们需要保存先保存链表第一个元素的拷贝，因为最后我们需要释放它，所以有old=head。")]),e._v(" "),r("li",[e._v("接下来的代码执行的是之前介绍的内容，首先是分配一个全新的链表元素，之后是设置该链表元素的内容，设置该链表元素的next指针指向旧元素的next指针。")]),e._v(" "),r("li",[e._v("之后的rcu_assign_pointer函数会设置一个memory barrier，以确保之前的所有写操作都执行完，再将head指向新分配的链表元素e。")]),e._v(" "),r("li",[e._v("之后就是释放锁。")]),e._v(" "),r("li",[e._v("之后调用synchronize_rcu确保任何一个可能持有了旧的链表元素的CPU都执行一次context switch，因此这些CPU会放弃指向旧链表元素的指针。")]),e._v(" "),r("li",[e._v("最后是释放旧的链表元素。")])]),e._v(" "),r("p",[e._v("这里有件事情需要注意，在数据读取代码中，我们可以在循环中查看链表元素，但是我们不能将链表元素返回。例如，我们使用RCU的时候，不能写一个list_lookup函数来返回链表元素，也不能返回指向链表元素中数据的指针，也就是不能返回嵌入在链表元素中的字符串。我们必须只在RCU critical区域内查看被RCU保护的数据，如果我们写了一个通用的函数返回链表元素，或许我们能要求这个函数的调用者也遵循一些规则，但是函数的调用者还是可能会触发context switch。如果我们在函数的调用者返回之前调用了rcu_read_unlock，这将会违反23.5中的规则1，因为现在定时器中断可以迫使context switch，而被RCU保护的数据指针仍然被持有者。所以使用RCU的确会向数据读取者增加一些之前并不存在的限制。")]),e._v(" "),r("blockquote",[r("p",[e._v("学生提问：这样是不是说我们不可能返回下标是i的元素所包含的内容？")]),e._v(" "),r("p",[e._v("Robert教授：可以返回一个拷贝，如果e->x是个字符串，那么我们可以返回一个该字符串的拷贝，这是没有问题的。但是如果我们直接返回一个指针指向e->x，那就违反了RCU规则。实际上返回e中的任何指针都是错误的，因为我们不能在持有指向RCU保护数据的指针时，发生context switch。通常的习惯是直接在RCU critical区域内使用这些数据。")])]),e._v(" "),r("p",[e._v("接下来我将再简短的介绍性能。如果你使用RCU，数据读取会非常的快，除了读取数据本身的开销之外就几乎没有别的额外的开销了。如果你的链表有10亿个元素，读取链表本身就要很长的时间，但是这里的时间消耗并不是因为同步（注，也就是类似加锁等操作）引起的。所以你几乎可以认为RCU对于数据读取者来说没有额外的负担。唯一额外的工作就是在rcu_read_lock和rcu_read_unlock里面设置好不要触发context switch，并且在rcu_dereference中设置memory barrier，这些可能会消耗几十个CPU cycle，但是相比锁来说代价要小的多。")]),e._v(" "),r("p",[e._v("对于数据写入者，性能会更加的糟糕。首先之前使用锁的时候所有的工作仍然需要做，例如获取锁和释放锁。其次，现在还有了一个可能非常耗时的synchronize_rcu函数调用。实际上在synchronize_rcu内部会出让CPU，所以代码在这不会通过消耗CPU来实现等待，但是它可能会消耗大量时间来等待其他所有的CPU核完成context switch。所以基于数据写入时的多种原因，和数据读取时的工作量，数据写入者需要消耗更多的时间完成操作。如果数据读取区域很短（注，这样就可以很快可以恢复context switch），并且数据写入并没有很多，那么数据写入慢一些也没关系。所以当人们将RCU应用到内核中时，必须要做一些性能测试来确认使用RCU是否能带来好处，因为这取决于实际的工作负载。")]),e._v(" "),r("blockquote",[r("p",[e._v("70:00 - 73:20（不相关的问题，故略过）")])])])}),[],!1,null,null,null);c.default=_.exports}}]);