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
#include <string.h>
#include <assert.h>

#pragma region code
#include <stdarg.h>

int arrary_offset(int arrayinfo[], ...)
{
  int dimensions;
  int subscripts[10];
  int hi, lo, cur;
  int offset;
  va_list var_args;
  int i;

  dimensions = arrayinfo[0];
  if (dimensions < 1 || dimensions > 10)
    return -1;

  va_start(var_args, arrayinfo);
  for (i = 0; i < dimensions; i++)
    subscripts[i] = va_arg(var_args, int);
  va_end(var_args);

  for (i = 0, offset = 0; i < dimensions; i++)
  {
    lo = *++arrayinfo;
    hi = *++arrayinfo;
    cur = subscripts[i];

    if (cur < lo || cur > hi)
      return -1;

    offset *= hi - lo + 1;
    offset += cur - lo;
  }

  return offset;
}

#pragma endregion code

int main(void)
{
  int arrayinfo[] = {3, 4, 6, 1, 5, -3, 3};
  assert(arrary_offset(arrayinfo, 4, 1, -3) == 0);
  assert(arrary_offset(arrayinfo, 4, 1, 3) == 6);
  assert(arrary_offset(arrayinfo, 5, 1, -3) == 35);
  assert(arrary_offset(arrayinfo, 4, 1, -2) == 1);
  assert(arrary_offset(arrayinfo, 4, 2, -3) == 7);
  assert(arrary_offset(arrayinfo, 6, 3, 1) == 88);
  return EXIT_SUCCESS;
}
