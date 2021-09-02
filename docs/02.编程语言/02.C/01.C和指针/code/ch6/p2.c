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
** If the string "substr" appears in "str", delete it.
*/
#define NULL 0
#define TRUE 1
#define FALSE 0

/*
** See if the substring beginning at "str" matches the string "want". If
** so, return a pointer to the first character in "str" after the match.
*/
char *match(char *str, char const *want)
{
  while (*want != '\0')
    if (*str++ != *want++)
      return NULL;
  return str;
}

int del_substr(char *str, char const *substr)
{
  char *next;

  while (*str != '\0')
  {
    next = match(str, substr);
    if (next != NULL)
    {
      /*
      ** Delete the substring by copying the bytes after it over the bytes of
      ** the substring itself.
      */
      while (*str++ = *next++)
        ;
      return TRUE;
    }
    str++;
  }

  return FALSE;
}

#pragma endregion code

#include <stdio.h>

int main(void)
{
  char str[] = "ABCDEFG";
  char const substr[] = "AB";
  int res;
  res = del_substr(str, substr);
  if (res)
    puts(str);
  else
    printf("None\n");
}
