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
#include <string.h>

void function(int const b[])
{
  int a = 110;
  b = &a;
  printf("%d\n", *b);
}

int main(void)
{
  int const a[] = {1, 2, 3, 4, 5, 6};
  function(a);
  return EXIT_SUCCESS;
}

#pragma endregion code
