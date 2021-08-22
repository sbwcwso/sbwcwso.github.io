	.file	"absdiff.c"
	.text
	.globl	absdiff
	.type	absdiff, @function
absdiff:
	pushl	%ebp
	movl	%esp, %ebp
	pushl	%ebx
	movl	8(%ebp), %ecx
	movl	12(%ebp), %edx
	movl	%ecx, %eax
	subl	%edx, %eax
	movl	%edx, %ebx
	subl	%ecx, %ebx
	cmpl	%edx, %ecx
	cmovle	%ebx, %eax
	popl	%ebx
	popl	%ebp
	ret
	.size	absdiff, .-absdiff
	.ident	"GCC: (Ubuntu 4.8.5-4ubuntu2) 4.8.5"
	.section	.note.GNU-stack,"",@progbits
