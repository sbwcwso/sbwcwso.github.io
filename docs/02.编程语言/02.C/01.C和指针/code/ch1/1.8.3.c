/*
#pragma region input
Hello world!
#pragma endregion input
*/

/*
#pragma region output
Hello world!
102
#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  char ch;
  signed char checksum = -1;
  while ((ch = getchar()) != EOF)
  {
    putchar(ch);
    checksum += ch;
  }
  printf("%d\n", checksum);

  return EXIT_SUCCESS;
}
#pragma endregion code
