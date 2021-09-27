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
** Safe string length. Returns the length of a string that
** is possibly not NUL-terminated. 'size' is the length of the
** buffer in which this string is stored.
*/

#include <stddef.h>

size_t my_strnlen(char const *string, size_t size)
{
  size_t length;

  for (length = 0; length < size; length++)
    if (*string++ == '\0')
      break;

  return length;
}

#pragma endregion code

/*
int main(void)
{
  char str[] = "hello world!";
  printf("%ld\n", my_strnlen(str, 3));
  return EXIT_SUCCESS;
}
*/