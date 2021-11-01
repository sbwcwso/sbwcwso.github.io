/*
#pragma region input
the one
the two
THE three
the

#pragma endregion input
*/

/*
#pragma region output
3

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define SIZE 101

char const whitespace[] = " \n\r\t\v\f";

int main(void)
{
  char buffer[SIZE];
  char *token;
  int count;

  while (fgets(buffer, SIZE, stdin))
  {
    for (token = strtok(buffer, whitespace);
         token != NULL;
         token = strtok(NULL, whitespace))
      if (strcmp(token, "the") == 0)
        count++;
  }

  printf("%d\n", count);
  return EXIT_SUCCESS;
}

#pragma endregion code
