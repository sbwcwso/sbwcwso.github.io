/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
/*
** Reverse the string contained in the argument
*/

void swap(char *str1, char *str2)
{
  *str1 ^= *str2;
  *str2 ^= *str1;
  *str1 ^= *str2;
}

void reverse_string(char *string)
{
  char *tail;

  for (tail = string; *tail != '\0'; tail++)
    ;
  tail--;

  while (string < tail)
    swap(string++, tail--);
}

#pragma endregion code

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  char str[] = "Hello world!";
  reverse_string(str);
  puts(str);
  return EXIT_SUCCESS;
}
