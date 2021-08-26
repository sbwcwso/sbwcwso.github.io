/*
#pragma region input
I'm ABZ, who are you?

#pragma endregion input
*/

/*
#pragma region output
V'z NOM, jub ner lbh?


#pragma endregion output
*/

#pragma region code
/*
** Encrypt the text on the standard input by rotating the alphabetic characters
** 13 positions through the alphabet. (Note: this program decrypts as well.)
*/
#include <stdio.h>
#include <stdlib.h>

/*
** Encrypt a single character. The base argument is either an upper or
** lower case A, depending on the case of the ch argument.
*/
int encrypt(int ch, int base)
{
  return (ch - base + 13) % 26 + base;
}

int main(void)
{
  int ch;

  while ((ch = getchar()) != EOF)
  {
    if (ch >= 'A' && ch <= 'Z')
      ch = encrypt(ch, 'A');
    else if (ch >= 'a' && ch <= 'z')
      ch = encrypt(ch, 'a');
    putchar(ch);
  }

  return EXIT_SUCCESS;
}

#pragma endregion code
