/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
Arithmetic shit

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  int a = -1;
  if (a >> 1 < 0)
    printf("Arithmetic shit\n");
  else
    printf("Logical shit\n");
  return EXIT_SUCCESS;
}

#pragma endregion code
