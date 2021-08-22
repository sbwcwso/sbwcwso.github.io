/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
9000042496
9000042496
True

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
  printf("%.f\n", b);
  printf("%.f\n", c);
  if (b == c)
    printf("True\n");
}

#pragma endregion code
