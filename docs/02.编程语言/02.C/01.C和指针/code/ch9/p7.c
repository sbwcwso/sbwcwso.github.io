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

char *my_strchr(char const *str, int ch)
{
  char const *prev;

  prev = NULL;
  for (; (str = strchr(str, ch)) != NULL; str++)
    prev = str;

  return (char *)prev;
}

#pragma endregion code
