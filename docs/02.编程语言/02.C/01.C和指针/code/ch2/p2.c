/*
#pragma region input1
}{
#pragma endregion input1
*/

/*
#pragma region output1
Extra closing brace!
1 unmatched opening brace(s)
#pragma endregion output1
*/

/*
#pragma region input2
#include <stdio.h>

int main(void)
{
  printf("hello world!\n");
  return 0;
}
#pragma endregion input2
*/

/*
#pragma region output2
Brace-matching success.
#pragma endregion output2
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  int ch;
  int braces = 0;
  int flag = 1;

  while ((ch = getchar()) != EOF)
  {
    if (ch == '{')
      braces++;

    if (ch == '}')
      if (braces == 0)
      {
        printf("Extra closing brace!\n");
        flag = 0;
      }
      else
        braces--;
  }

  if (braces > 0)
    printf("%d unmatched opening brace(s)\n", braces);
  else if (flag)
    printf("Brace-matching success.\n");

  return EXIT_SUCCESS;
}
#pragma endregion code
