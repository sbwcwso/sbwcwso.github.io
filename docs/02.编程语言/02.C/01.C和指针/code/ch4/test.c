/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>
#include <float.h>

int main(void)
{
  int a = 1;
  float b = 9000043000;
  float c = 9000042000;
  printf("%.20f\n", b);
  printf("%.20f\n", c);
  if (b == c)
    printf("True\n");
}
#pragma endregion code
