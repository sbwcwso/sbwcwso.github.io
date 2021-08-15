	.file	"goto_ad.c"
	.version	"01.01"
gcc2_compiled.:
.text
	.align 16
.globl goto_ad
	.type	 goto_ad,@function
goto_ad:
	pushl %ebp
	movl %esp,%ebp
	movl 8(%ebp),%edx
	movl 12(%ebp),%eax
	cmpl %eax,%edx
	jle .L4
	subl %eax,%edx
	movl %edx,%eax
	jmp .L7
	.p2align 4,,7
.L4:
	subl %edx,%eax
.L7:
	movl %ebp,%esp
	popl %ebp
	ret
.Lfe1:
	.size	 goto_ad,.Lfe1-goto_ad
	.ident	"GCC: (GNU) 2.95.4 20011002 (Debian prerelease)"
