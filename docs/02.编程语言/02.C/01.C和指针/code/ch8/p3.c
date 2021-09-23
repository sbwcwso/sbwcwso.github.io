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
#define TRUE 1
#define FALSE 0
/*
** Test a square matrix (10 * 10) to see if it is an identity matrix.
*/
int identity_matrix(int (*matrix)[10])
{
  int row, column;
  for (row = 0; row < 10; row++)
    for (column = 0; column < 10; column++)
      if (matrix[row][column] != (row == column))
        return FALSE;

  return TRUE;
}

#pragma endregion code

int main(void)
{
  int matrix[10][10];
  int row, column;
  for (row = 0; row < 10; row++)
    for (column = 0; column < 10; column++)
      matrix[row][column] = (row == column);
  matrix[1][2] = 100;
  printf("%s\n", identity_matrix(matrix) ? "TRUE" : "FALSE");
  return EXIT_SUCCESS;
}
