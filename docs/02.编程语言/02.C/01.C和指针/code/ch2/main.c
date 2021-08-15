#include <stdio.h>

int increment(int number);
int negate(int number);

int main(void)
{
  printf("increment: %d, %d, %d\n",
         increment(10), increment(0), increment(-10));
  printf("negate: %d, %d, %d\n",
         negate(10), negate(0), negate(-10));
}