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
#include <stdarg.h>

/*
** Retrun the largest value form the argument list. The list is 
** terminated by a negative value.
*/
int max_list(int first_arg, ...)
{
  int current_arg;
  va_list var_arg;

  if (first_arg < 0)
    return 0;

  va_start(var_arg, first_arg);
  while ((current_arg = va_arg(var_arg, int)) > 0)
    if (first_arg < current_arg) /* first arg is the largest value */
      first_arg = current_arg;

  va_end(var_arg);
  return first_arg;
}

#pragma endregion code

int main(void)
{
  printf("%d\n", max_list(-10, 1, 2));
  return EXIT_SUCCESS;
}
