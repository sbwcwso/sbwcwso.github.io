/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
#include <string.h>

char *my_strnchr(char const *str, int ch, int which)
{
  char const *prev;

  prev = NULL;
  for (; --which >= 0 && (str = strchr(str, ch)) != NULL; str++)
    prev = str;

  if (which == 0)
    return (char *)prev;
  else
    return NULL;
}

#pragma endregion code
