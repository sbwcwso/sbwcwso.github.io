	.file	"try1.c"
	.text
	.globl	try1
	.type	try1, @function
try1:
.LFB0:
	.cfi_startproc
	endbr64
	movl	$0, i(%rip)
.L2:
	movl	i(%rip), %eax
	cmpl	$49, %eax
	jg	.L4
	movslq	%eax, %rdx
	leaq	y(%rip), %rcx
	movl	(%rcx,%rdx,4), %esi
	leaq	x(%rip), %rcx
	movl	%esi, (%rcx,%rdx,4)
	addl	$1, %eax
	movl	%eax, i(%rip)
	jmp	.L2
.L4:
	ret
	.cfi_endproc
.LFE0:
	.size	try1, .-try1
	.comm	p2,8,8
	.comm	p1,8,8
	.comm	i,4,4
	.comm	y,200,32
	.comm	x,200,32
	.ident	"GCC: (Ubuntu 9.3.0-17ubuntu1~20.04) 9.3.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	 1f - 0f
	.long	 4f - 1f
	.long	 5
0:
	.string	 "GNU"
1:
	.align 8
	.long	 0xc0000002
	.long	 3f - 2f
2:
	.long	 0x3
3:
	.align 8
4:
