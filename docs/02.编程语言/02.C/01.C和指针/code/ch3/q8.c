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

int main(void)
{
  char *a = "Hello world";
  printf("%s\n", a);
  putchar(a[2]);
  a[1] = 'c';
  return EXIT_SUCCESS;
}
#pragma endregion code
