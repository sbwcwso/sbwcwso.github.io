	.file	"swap.c"
	.text
	.p2align 4,,15
	.globl	swap
	.type	swap, @function
swap:
	movl	(%rdi), %eax
	movl	(%rsi), %edx
	pushq	%rbp
	movl	%edx, (%rdi)
	movq	%rsp, %rbp
	movl	%eax, (%rsi)
	popq	%rbp
	ret
	.size	swap, .-swap
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
