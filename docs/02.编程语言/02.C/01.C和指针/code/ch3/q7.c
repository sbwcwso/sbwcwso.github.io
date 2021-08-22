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
  enum Liquid
  {
    OUNCE = 1,
    CUP = 8,
    PINT = 16,
    QUART = 32,
    GALLON = 128
  };
  enum Liquid jar;
  jar = QUART;
  printf("%d\n", jar);
  jar = jar + PINT;
  printf("%d\n", jar);

  return EXIT_SUCCESS;
}

#pragma endregion code
