/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
FLT_DIG = 6
DBL_DIG = 15
LDBL_DIG = 18
#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>
#include <float.h>

int main(void)
{
  printf("FLT_DIG = %d\n", FLT_DIG);
  printf("DBL_DIG = %d\n", DBL_DIG);
  printf("LDBL_DIG = %d\n", LDBL_DIG);
  return EXIT_SUCCESS;
}
#pragma endregion code
