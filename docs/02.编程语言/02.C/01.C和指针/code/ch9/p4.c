/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#include <stdio.h>

#pragma region code
#include <string.h>
#include "my_string.h"

/*
** Safe string concatenation.
** size is the length of dest buffer
*/
char *my_strcat(char *dest, char *src, size_t size)
{
  size_t remain_size;

  remain_size = size - my_strnlen(dest, size);
  if (remain_size > 1)
    strncat(dest, src, remain_size - 1);

  /*
  ** Make sure the result is a real string
  */
  dest[size - 1] = '\0';

  return dest;
}

#pragma endregion code
