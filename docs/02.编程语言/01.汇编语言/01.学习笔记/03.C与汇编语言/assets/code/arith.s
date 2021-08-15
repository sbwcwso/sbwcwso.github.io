	.file	"arith.c"
	.text
	.p2align 4,,15
	.globl	arith
	.type	arith, @function
arith:
	pushl	%ebp
	movl	%esp, %ebp
	movl	8(%ebp), %ecx
	movl	12(%ebp), %edx
	leal	(%ecx,%edx), %eax
	leal	(%edx,%edx,2), %edx
	addl	16(%ebp), %eax
	sall	$4, %edx
	leal	4(%ecx,%edx), %edx
	imull	%edx, %eax
	popl	%ebp
	ret
	.size	arith, .-arith
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
