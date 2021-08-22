	.file	"logical.c"
	.text
	.p2align 4,,15
	.globl	logical
	.type	logical, @function
logical:
	pushl	%ebp
	movl	%esp, %ebp
	movl	12(%ebp), %eax
	xorl	8(%ebp), %eax
	popl	%ebp
	sarl	$17, %eax
	andl	$8185, %eax
	ret
	.size	logical, .-logical
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
