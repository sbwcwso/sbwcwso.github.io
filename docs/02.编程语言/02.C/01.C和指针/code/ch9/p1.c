/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main(void)
{
  int ch;
  int n_ctrls = 0;
  int n_spaces = 0;
  int n_digits = 0;
  int n_lowers = 0;
  int n_uppers = 0;
  int n_puncts = 0;
  int n_nprints = 0;
  int total = 0;

  while ((ch = getchar()) != EOF)
  {
    if (iscntrl(ch))
      n_ctrls++;
    if (isspace(ch))
      n_spaces++;
    if (isdigit(ch))
      n_digits++;
    if (islower(ch))
      n_lowers++;
    if (isupper(ch))
      n_uppers++;
    if (ispunct(ch))
      n_puncts++;
    if (!isprint(ch))
      n_nprints++;

    total++;
  }

  if (total == 0)
    printf("No characters in the input!\n");
  else
  {
    printf("%3.0f%% control characters\n", n_ctrls * 100.0 / total);
    printf("%3.0f%% whitespace characters\n", n_spaces * 100.0 / total);
    printf("%3.0f%% digits\n", n_digits * 100.0 / total);
    printf("%3.0f%% lower case letters\n", n_lowers * 100.0 / total);
    printf("%3.0f%% upper case letters\n", n_uppers * 100.0 / total);
    printf("%3.0f%% punctuation characters\n", n_puncts * 100.0 / total);
    printf("%3.0f%% non-printable characters\n", n_nprints * 100.0 / total);
  }
  return EXIT_SUCCESS;
}

#pragma endregion code
