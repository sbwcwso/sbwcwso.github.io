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

#pragma region code
/*
** Safe string copy
*/

#include <string.h>

char *my_strcpy(char *dest, char *src, size_t size)
{
  strncpy(dest, src, size);
  dest[size - 1] = '\0';

  return dest;
}

#pragma endregion code
