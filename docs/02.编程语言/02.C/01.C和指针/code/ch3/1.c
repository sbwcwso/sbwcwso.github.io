#include <stdio.h>

extern int a;

void foo3(void);
void foo4(void);

int main(void)
{
  foo3();
  foo4();
  printf("global a: %d\n", a);
}
