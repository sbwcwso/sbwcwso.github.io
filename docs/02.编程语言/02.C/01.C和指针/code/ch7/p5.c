/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
#include <stdarg.h>

void printf_integer(int);
void printf_float(float);

void printf(char *format, ...)
{
  va_list var_arg;
  char ch;
  char *string;

  va_start(var_arg, format);

  while ((ch = *format++) != '\0')
  {
    if (ch != '%')
      putchar(ch);
    else
    {
      switch (*format != '\0' ? *format++ : '\0')
      {
      case 'd':
        printf_integer(va_arg(var_arg, int));
        break;

      case 'f':
        printf_float(va_arg(var_arg, double));
        break;

      case 'c':
        putchar(va_arg(var_arg, int));
        break;

      case 's':
        string = va_arg(var_arg, char *);
        while (*string != '\0')
          putchar(*string++);
        break;

      default: /*other format codes, do nothing*/
        break;
      }
    }
  }
}

#pragma endregion code
