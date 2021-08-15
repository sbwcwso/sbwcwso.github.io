/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
The range of 'float' is 1.17549e-38 ~ 3.40282e+38
The range of 'double' is 2.22507e-308 ~ 1.79769e+308
The range of 'long double' is 3.3621e-4932 ~ 1.18973e+4932
#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>
#include <float.h>

int main(void)
{
  printf("The range of 'float' is %g ~ %g\n", FLT_MIN, FLT_MAX);
  printf("The range of 'double' is %g ~ %g\n", DBL_MIN, DBL_MAX);
  printf("The range of 'long double' is %Lg ~ %Lg\n", LDBL_MIN, LDBL_MAX);
  return EXIT_SUCCESS;
}
#pragma endregion code
