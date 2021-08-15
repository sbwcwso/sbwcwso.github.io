	.file	"swap_1.c"
	.text
	.p2align 4,,15
	.globl	swap
	.type	swap, @function
swap:
	movq	(%rdi), %rax
	movq	(%rsi), %rdx
	pushq	%rbp
	movq	%rdx, (%rdi)
	movq	%rsp, %rbp
	movq	%rax, (%rsi)
	popq	%rbp
	ret
	.size	swap, .-swap
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
