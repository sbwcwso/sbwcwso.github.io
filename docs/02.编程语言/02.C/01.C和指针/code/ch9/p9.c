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

int count_chars(char const *str, char const *chars)
{
  int count;

  count = 0;
  for (; (str = strpbrk(str, chars)) != NULL; str++)
    count++;

  return count;
}

#pragma endregion code
