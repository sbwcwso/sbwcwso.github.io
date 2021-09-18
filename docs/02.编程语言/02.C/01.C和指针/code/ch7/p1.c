/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#include <stdio.h>
#include <stdlib.h>

#pragma region code
/*
** Calculate Hermite Polynomials 
*/
int hermite(int n, int x)
{
  if(n <= 0)
    return 1;
  if (n==1)
    return 2 * x;

  return 2 * x * hermite(n-1, x) - 2 * (n - 1) * hermite(n-2, x);
}

#pragma endregion code

int main(void)
{
  printf("%d\n", hermite(3, 2));
  return EXIT_SUCCESS;
}
