#include <stdio.h>

extern int *a;
extern int b[];
int x, y;

int main(void)
{
  y = b[0];
  int *a;
  a = (int *)y;
  printf("%ld, %d\n", (long int)a, (int)y);
  printf("%d\n", *a);
}