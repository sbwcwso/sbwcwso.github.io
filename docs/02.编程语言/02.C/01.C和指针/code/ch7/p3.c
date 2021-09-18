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
int ascii_to_integer(char *string)
{
  int number;

  while (*string >= '0' && *string <= '9')
  {
    number *= 10;
    number += *string - '0';
    string++;
  }

  if (*string != '\0')
    number = 0;

  return number;
}

#pragma endregion code

int main(void)
{
  char str[100] = "16123";
  printf("%d\n", ascii_to_integer(str));
  return EXIT_SUCCESS;
}
