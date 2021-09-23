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
** Test a square matrix (size * size) to see if it is an identity matrix.
*/
int identity_matrix(int *matrix, int size)
{
  int row, column;
  for (row = 0; row < size; row++)
    for (column = 0; column < size; column++)
      if (*matrix++ != (row == column))
        return FALSE;

  return TRUE;
}

#pragma endregion code

#define SIZE 100

int main(void)
{
  int matrix[SIZE][SIZE];
  int row, column;
  for (row = 0; row < SIZE; row++)
    for (column = 0; column < SIZE; column++)
      matrix[row][column] = (row == column);
  matrix[1][1] = 1;
  matrix[1][2] = 0;
  printf("%s\n", identity_matrix((int *)matrix, SIZE) ? "TRUE" : "FALSE");
  return EXIT_SUCCESS;
}
