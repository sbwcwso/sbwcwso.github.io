/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/
#include <stdlib.h>
#include <stdio.h>
#include <string.h>

#pragma region code
#include <ctype.h>

#define TRUE 1
#define FALSE 0

int palindrome(char *string)
{
  char *start;
  char *end;
  start = string;
  end = string + strlen(string) - 1;
  while (TRUE)
  {
    while (start < end && !isalpha(*start))
      start++;
    while (start < end && !isalpha(*end))
      end--;
    if (start >= end)
      return TRUE;
    if (tolower(*start++) != tolower(*end--))
      return FALSE;
  }
}

#pragma endregion code

int main(void)
{
  char *string = "Madam, I'm Adam.";
  int res;

  res = palindrome(string);
  if (res)
    printf("TRUE\n");
  else
    printf("FALSE\n");
  return EXIT_SUCCESS;
}