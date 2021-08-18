/*
#pragma region input
This is the first line.
Another line.
And another.
And another.
And another.
And another.
Still more.
Almost done now.
Almost done now.
Another line.
Still more.
Finished!
#pragma endregion input
*/

/*
#pragma region output
And another.
Almost done now.
#pragma endregion output
*/

#pragma region code
/*
** Print one line from each set of duplicate lines in the standard input.
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TRUE 1
#define FALSE 0

#define LINE_SIZE 129

int main(void)
{
  char new_line[LINE_SIZE], last_line[LINE_SIZE];
  int print_from_group;

  print_from_group = FALSE;

  if (gets(last_line) != NULL)
    while (gets(new_line) != NULL)
    {
      if (strcmp(new_line, last_line) == 0)
      {
        if (!print_from_group)
        {
          puts(new_line);
          print_from_group = TRUE;
        }
      }
      else
      {
        strcpy(last_line, new_line);
        print_from_group = FALSE;
      }
    }

  return EXIT_SUCCESS;
}
#pragma endregion code
