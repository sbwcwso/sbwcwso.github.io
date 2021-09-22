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

int main(void)
{
  int array[3][3] = {{1, 2, 3},
                     {4, 5, 6},
                     {7, 8, 9}};
  int *i;

  i = array[1, 2];
  printf("%d\n", *i);
  return EXIT_SUCCESS;
}

#pragma endregion code
