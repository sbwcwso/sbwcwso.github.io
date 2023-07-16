(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1243:function(t,s,e){"use strict";e.r(s);var a=e(12),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-常用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-常用技巧"}},[t._v("#")]),t._v(" Git 常用技巧")]),t._v(" "),e("h2",{attrs:{id:"根据-gitignore-文件删除已添加到仓库中的内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据-gitignore-文件删除已添加到仓库中的内容"}},[t._v("#")]),t._v(" 根据 .gitignore 文件删除已添加到仓库中的内容")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("方法 1")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-files -i -c --exclude-from"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(".gitignore"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("如果含有汉字等非 ASCII 编码，则此方法失效")]),t._v(" "),e("ul",[e("li",[t._v("需要使用下列命令禁用 git 引用的八进制表示法打印非 ASCII 文件名")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.quotepath off\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/a/13541721/11152760",target:"_blank",rel:"noopener noreferrer"}},[t._v("how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://stackoverflow.com/a/22828826/11152760",target:"_blank",rel:"noopener noreferrer"}},[t._v("how-to-make-git-properly-display-utf-8-encoded-pathnames-in-the-console-window"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("方法 2")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Drop files from .gitignore"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("blockquote",[e("p",[e("a",{attrs:{href:"https://stackoverflow.com/a/34435207/11152760",target:"_blank",rel:"noopener noreferrer"}},[t._v("how-to-remove-files-that-are-listed-in-the-gitignore-but-still-on-the-repositor"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);