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
** Find the first occurrence in 'source' of any of the characters in 'chars' and
** return a pointer to that location. If none are found, or if 'source' or 'chars'
** are NULL pointers, a NULL pointer is returned.
*/

#include <limits.h>

#define NULL 0

char *find_char(char const *source, char const *chars)
{
  char char_map[1 << CHAR_BIT] = {0};

  /*
  ** Verify the input
  */
  if (source == NULL || chars == NULL || *source == '\0' || *chars == '\0')
    return NULL;

  /*
  ** Look through `source` for a match with the character in `chars`
  */

  while (*chars != '\0')
    char_map[*chars++] = 1;
  while (*source != '\0')
    if (char_map[*source++])
      return (char *)(source - 1);
  return NULL;
}

#pragma endregion code

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  const char source[] = "ABCDEF";
  const char chars[] = "XRQA";
  char *res;

  res = find_char(source, chars);
  if (res == NULL)
    printf("NULL\n");
  else
    printf("%c\n", *res);

  return EXIT_SUCCESS;
}
