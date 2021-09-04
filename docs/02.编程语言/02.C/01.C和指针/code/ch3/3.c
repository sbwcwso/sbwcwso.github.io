#include <stdio.h>

static int a = 3;

void foo3(void)
{
  extern int a;
  printf("foo3 a : %d\n", a);
}
