	.file	"lgt.c"
	.text
	.p2align 4,,15
	.globl	lgt
	.type	lgt, @function
lgt:
	pushq	%rbp
	xorl	%eax, %eax
	cmpq	%rsi, %rdi
	setg	%al
	movq	%rsp, %rbp
	popq	%rbp
	ret
	.size	lgt, .-lgt
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
