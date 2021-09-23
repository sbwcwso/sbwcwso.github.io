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
#include <string.h>

#pragma region code
/*
** multiply two matrices
*/

void matrix_multiply(int *m1, int *m2, int *r,
                     int x, int y, int z)
{
  int row, column;
  register int k, *m1p, *m2p;

  for (row = 0; row < x; row++)
    for (column = 0; column < z; column++)
    {
      *r = 0;
      m1p = m1 + row * y;
      m2p = m2 + column;
      for (k = 0; k < y; k++)
      {
        *r += *m1p * *m2p;
        m1p++;
        m2p += z;
      }
      r++;
    }
}

#pragma endregion code

int main(void)
{
  int m1[3][2] = {{2, -6},
                  {3, 5},
                  {1, -1}};
  int m2[2][4] = {
      {4, -2, -4, -5},
      {-7, -3, 6, 7}};
  int r[3][4];
  int i, j;

  matrix_multiply((int *)m1, (int *)m2, (int *)r, 3, 2, 4);
  for (i = 0; i < 3; i++, putchar('\n'))
    for (j = 0; j < 4; j++)
      printf("%3d ", r[i][j]);
  return EXIT_SUCCESS;
}
