/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
int gcd(int m, int n)
{
  int r;

  if (m <= 0 || n <= 0)
    return 0;

  while ((r = m % n) != 0)
  {
    m = n;
    n = r;
  }

  return n;
}

#pragma endregion code

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
  int m, n;
  scanf("%d %d", &m, &n);
  printf("gcd(%d, %d) = %d\n", m, n, gcd(m, n));
  return EXIT_SUCCESS;
}
