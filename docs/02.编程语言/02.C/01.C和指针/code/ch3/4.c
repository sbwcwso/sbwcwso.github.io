#include <stdio.h>

static int a = 4;

void foo4(void)
{
  extern int a;
  printf("foo4 a : %d\n", a);
}