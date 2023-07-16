(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1144:function(t,c,e){"use strict";e.r(c);var r=e(12),_=Object(r.a)({},(function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"235-rcu实现3---读写规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#235-rcu实现3---读写规则"}},[t._v("#")]),t._v(" 23.5 RCU实现(3) - 读写规则")]),t._v(" "),e("p",[t._v("前面有同学也提到过，数据写入者会将E1的next指针从指向旧的E2切换到指向新的E2‘，但是可能有数据读取者在切换之前读到了旧的E2，并且仍然在查看旧的E2。我们需要在某个时候释放旧的E2，但是最好不要在某些数据读取者还在读的时候释放。所以我们需要等待最后一个数据读取者读完旧的E2，然后才能释放旧的E2。这就是RCU需要解决的第三个问题，数据写入者到底要等待多久才能释放E2？你可以想到好几种方法来实现这里的等待。")]),t._v(" "),e("p",[t._v("例如，我们可以为每个链表元素设置一个引用计数，并让数据读取者在开始使用链表元素时对引用计数加1，用完之后对引用计数减1，然后让数据写入者等待引用计数为0。但是我们会第一时间就否定这个方案，因为RCU的核心思想就是在读数据的时候不引入任何的写操作，因为我们前面看过了，如果有大量的数据读取者同时更新引用计数，相应的代价将十分高。所以我们绝对不会想要有引用计数的存在。")]),t._v(" "),e("p",[t._v("另一种可能是使用自带垃圾回收（Garbage Collect）的编程语言。在带有GC的编程语言中，你不用释放任何对象，相应的GC会记住是否有任何线程或者任何数据结构对于某个对象还存在引用。如果GC发现对象不可能再被使用时，就会释放对象。这也是一种可能且合理的用来释放链表元素的方法。但是使用了RCU的Linux系统，并不是由带有GC的编程语言编写，并且我们也不确定GC能不能提升性能，所以这里我们也不能使用一个标准GC来释放E2。")]),t._v(" "),e("p",[t._v("RCU使用的是另一种方法，数据读取者和写入者都需要遵循一些规则，使得数据写入者可以在稍后再释放链表元素。规则如下：")]),t._v(" "),e("ol",[e("li",[t._v("数据读取者不允许在context switch（注，是指线程切换的context switch，详见11.4）时持有一个被RCU保护的数据（也就是链表元素）的指针。所以数据读取者不能在RCU critical 区域内出让CPU。")]),t._v(" "),e("li",[t._v("对于数据写入者，它会在每一个CPU核都执行过至少一次context switch之后再释放链表元素。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28709%29.png",alt:""}})]),t._v(" "),e("p",[t._v("这里的第一条规则也是针对spin lock的规则，在spin lock的加锁区域内是不能出让CPU的。第二条规则更加复杂点，但是相对来说也更清晰，因为每个CPU核都知道自己有没有发生context switch，所以第二条规则是数据写入者需要等待的一个明确条件。数据写入者或许要在第二条规则上等待几个毫秒的时间才能确保没有数据读取者还在使用链表元素，进而释放链表元素。")]),t._v(" "),e("p",[t._v("人们创造了多种技术来实现上面第二条规则中的等待，"),e("a",{attrs:{href:"https://pdos.csail.mit.edu/6.828/2020/readings/rcu-decade-later.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("论文"),e("OutboundLink")],1),t._v("里面讨论的最简单的一种方法是通过调整线程调度器，使得写入线程简短的在操作系统的每个CPU核上都运行一下，这个过程中每个CPU核必然完成了一次context switching。因为数据读取者不能在context switch的时候持有数据的引用，所以经过这个过程，数据写入者可以确保没有数据读取者还在持有数据。")]),t._v(" "),e("p",[t._v("所以数据写入者的代码实际上看起来是这样的：")]),t._v(" "),e("ul",[e("li",[t._v("首先完成任何对于数据的修改")]),t._v(" "),e("li",[t._v("之后调用实现了上面第二条规则synchronize_rcu函数")]),t._v(" "),e("li",[t._v("最后才是释放旧的链表元素")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28716%29.png",alt:""}})]),t._v(" "),e("p",[t._v("synchronize_rcu迫使每个CPU核都发生一次context switch，所以在synchronize_rcu函数调用之后，由于前面的规则1，任何一个可能持有旧的E1 next指针的CPU核，都不可能再持有指向旧数据的指针，这意味着我们可以释放旧的链表元素。")]),t._v(" "),e("p",[t._v("你们可能会觉得synchronize_rcu要花费不少时间，可能要将近1个毫秒，这是事实并且不太好。其中一种辩解的方法是：对于RCU保护的数据来说，写操作相对来说较少，写操作多花费点时间对于整体性能来说不会太有影响。")]),t._v(" "),e("p",[t._v("对于数据写入者不想等待的场景，可以调用另一个函数call_rcu，将你想释放的对象和一个执行释放的回调函数作为参数传入，RCU系统会将这两个参数存储到一个列表中，并立刻返回。之后在后台，RCU系统会检查每个CPU核的context switch计数，如果每个CPU核都发生过context switch，RCU系统会调用刚刚传入的回调函数，并将想要释放的对象作为参数传递给回调函数。这是一种避免等待的方法，因为call_rcu会立即返回。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/sbwcwso/PicBed@master/image%20%28721%29.png",alt:""}})]),t._v(" "),e("p",[t._v("但是另一方面不推荐使用call_rcu，因为如果内核大量的调用call_rcu，那么保存call_rcu参数的列表就会很长，这意味着需要占用大量的内存，因为每个列表元素都包含了一个本该释放的指针。在一个极端情况下，如果你不够小心，大量的调用call_rcu可能会导致系统OOM，因为所有的内存都消耗在这里的列表上了。所以如果不是必须的话，人们一般不会使用call_rcu。")]),t._v(" "),e("blockquote",[e("p",[t._v("学生提问：这里的机制阻止了我们释放某些其他人还在使用的对象，但是并没有阻止数据读取者看到更新了一半的数据，对吗？")]),t._v(" "),e("p",[t._v("Robert教授：23.3中的基本实现阻止了你说的情况，在23.3中，我们并不是在原地更新链表元素，如果是的话绝对会造成你说的那种情况。RCU不允许在原地更新数据，它会创建一个新的数据元素然后通过单个committing write替换原有数据结构中的旧数据元素。因为这里的替换是原子的，所以数据读取者看不到更新了一半的数据。")]),t._v(" "),e("p",[t._v("学生提问：上面提到的条件1，是不是意味着我们必须关注在RCU read crtical区域内的代码执行时间，因为它限制了CPU核在这个区域内不能context switch？")]),t._v(" "),e("p",[t._v("Robert教授：是的，在RCU区域内，数据读取者会阻止CPU发生context switch，所以你会想要让这个区域变得较短，这是个需要考虑的地方。RCU使用的方式是，在Linux中本来有一些被普通锁或者读写锁保护的代码，然后某人会觉得锁会带来糟糕的性能问题，他会将Locking区域替换成RCU区域，尽管实际中会更加复杂一些。")]),t._v(" "),e("p",[t._v("Locking区域已经尽可能的短了，因为当你持有锁的时候，可能有很多个CPU核在等待锁，所以普通锁保护的区域会尽量的短。因为RCU区域通常是用来替代Lock区域，它也趋向于简短，所以通常情况下不用担心RCU区域的长短。")]),t._v(" "),e("p",[t._v("这里实际的限制是，数据读取者不能在context switch时持有指针指向被RCU保护的数据，这意味着你不能读磁盘，然后在等读磁盘返回的过程中又持有指针指向被RCU保护的数据。所以通常的问题不是RCU区域的长短，而是禁止出让CPU。")])])])}),[],!1,null,null,null);c.default=_.exports}}]);