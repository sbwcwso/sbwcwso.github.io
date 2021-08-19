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
  int i = 10;
  i = i-- - --i * (i = -3) * i++ + ++i;
  printf("i = %d\n", i);

  return EXIT_SUCCESS;
}
#pragma endregion code
