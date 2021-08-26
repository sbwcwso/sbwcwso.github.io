/*
#pragma region input
-=-. Simple is better than complex.

#pragma endregion input
*/

/*
#pragma region output
-=-. simple is better than complex.


#pragma endregion output
*/

#pragma region code
/*
** Copy the standard input to the standard output, converting
** all uppercase characters to lowercase. 
*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  int ch;

  while ((ch = getchar()) != EOF)
  {
    if (ch >= 'A' && ch <= 'Z')
      ch += 'a' - 'A'; // The ASCII code of a is greater than A
    putchar(ch);
  }

  return EXIT_SUCCESS;
}

#pragma endregion code
