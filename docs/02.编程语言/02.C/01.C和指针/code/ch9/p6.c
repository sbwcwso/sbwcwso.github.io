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

char *my_strcpy_end(char *dest, char const *src)
{
  while ((*dest++ = *src++) != '\0')
    ;

  return dest - 1;
}

#pragma endregion code
