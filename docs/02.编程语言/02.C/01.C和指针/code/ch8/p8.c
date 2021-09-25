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

#define SIZE 1
#define TRUE 1
#define FALSE 0

static int board[SIZE][SIZE];

void print_board(int n_solutions)
{
  int row, column;
  printf("Solution#%d\n", n_solutions);
  for (row = 0; row < SIZE; row++, putchar('\n'))
    for (column = 0; column < SIZE; column++, putchar(' '))
      if (board[row][column])
        putchar('Q');
      else
        putchar('0');
  putchar('\n');
}

int conflict(int row, int column)
{
  int i;

  for (i = 0; i < row; i++)
  {
    if (board[i][column])
      return TRUE;
    if (i - row + column >= 0 && board[i][i - row + column])
      return TRUE;
    if (row - i + column < SIZE && board[i][row - i + column])
      return TRUE;
  }

  return FALSE;
}

void place_queue(int row)
{
  static int n_solutions;
  int column;

  if (row < SIZE)
    for (column = 0; column < SIZE; column++)
      if (!conflict(row, column))
      {
        board[row][column] = TRUE;
        place_queue(row + 1);
        board[row][column] = FALSE;
      }
  if (row == SIZE)
    print_board(++n_solutions);
}

int main(void)
{
  place_queue(0);
  return EXIT_SUCCESS;
}

#pragma endregion code
