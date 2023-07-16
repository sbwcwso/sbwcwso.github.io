(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1228:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"onedrive-文件同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onedrive-文件同步"}},[s._v("#")]),s._v(" Onedrive 文件同步")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/abraunegg/onedrive",target:"_blank",rel:"noopener noreferrer"}},[s._v("github 地址"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/abraunegg/onedrive/blob/master/docs/ubuntu-package-install.md#distribution-ubuntu-2004",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu 20.04 安装方法"),a("OutboundLink")],1),a("br"),s._v(" "),a("a",{attrs:{href:"https://github.com/abraunegg/onedrive/blob/master/docs/USAGE.md#onedrive-service-running-as-root-user-via-systemd-arch-ubuntu-debian-opensuse-fedora",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用方法"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("配置文件")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("~/.config/onedrive/config")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("配置示例")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Configuration for OneDrive Linux Client")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This file contains the list of supported configuration fields")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# with their default values.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# All values need to be enclosed in quotes")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# When changing a config option below, remove the '#' from the start of the line")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For explanations of all config options below see docs/USAGE.md or the man page.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nsync_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/OneDrive"')]),s._v("\nskip_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~*|.~*|*.tmp"')]),s._v("\nmonitor_interval "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),s._v("\nskip_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*/_book|*/node_modules|*/.cache|*/.git|*/dist"')]),s._v("\nlog_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/log/onedrive/"')]),s._v("\ndrive_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nupload_only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ncheck_nomount "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ncheck_nosync "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ndownload_only "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ndisable_notifications "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ndisable_upload_validation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nenable_logging "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nforce_http_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nlocal_first "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nno_remote_delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nskip_symlinks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ndebug_https "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nskip_dotfiles "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\ndry_run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nmin_notify_changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("\nmonitor_log_frequency "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v("\nmonitor_fullscan_frequency "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10"')]),s._v("\nsync_root_files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nclassify_as_big_delete "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1000"')]),s._v("\nuser_agent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nremove_source_files "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nskip_dir_strict_match "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\napplication_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nresync "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nbypass_data_preservation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nazure_ad_endpoint "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\nazure_tenant_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"common"')]),s._v("\nsync_business_shared_folders "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("\nsync_dir_permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"700"')]),s._v("\nsync_file_permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"600"')]),s._v("\nrate_limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"104857600"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("ul",[a("li",[a("code",[s._v('resync = "true"')]),s._v(" 每次会放弃之前的同步状态，重新同步文件\n"),a("ul",[a("li",[s._v("重新开机后，可能会导致出现很多同步冲突")]),s._v(" "),a("li",[s._v("一般"),a("strong",[s._v("不要开启")])])])])])])])])])]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("启动方法")]),s._v(" "),a("ul",[a("li",[s._v("按此方法，会设置为开机启动")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl --user "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" onedrive\nsystemctl --user start onedrive\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("查看日志文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("journalctl --user-unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("onedrive -f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[s._v("只同步相应的文件夹")]),s._v(" "),a("ul",[a("li",[s._v("在 "),a("code",[s._v("~/.config/onedrive/sync_list")]),s._v(" 中设置\n"),a("ul",[a("li",[s._v("不支持中文 ⚠️")]),s._v(" "),a("li",[s._v("修改此文件后\n"),a("ul",[a("li",[s._v("使用命令 "),a("code",[s._v("systemctl --user stop onedrive")]),s._v(" 停止应用\n"),a("ul",[a("li",[s._v("最好等现在所有的文件同步完成后再停止，不然可能出现同步冲突")])])]),s._v(" "),a("li",[s._v("使用命令 "),a("code",[s._v("onedrive --synchronize --resync")]),s._v(" 来使配置生效\n"),a("ul",[a("li",[s._v("同步完成后可强制中止指令")])])]),s._v(" "),a("li",[s._v("通过 "),a("code",[s._v("systemctl --user start onedrive")]),s._v(" 来启动 "),a("code",[s._v("onedrive")]),s._v("， 以让其在后台运行")])])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);