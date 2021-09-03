/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#pragma region code
/*
** Sieve of Eratosthenes -- compute prime numbers using an array.
*/

#include <stdio.h>
#include <stdlib.h>

#define SIZE 1000
#define TRUE 1
#define FALSE 0

int main(void)
{
  char sieve[SIZE];
  int number;
  char *sp; /*pointer to access the sieve*/

  for (sp = sieve; sp < &sieve[SIZE]; sp++)
    *sp = TRUE;

  printf("2\n");

  for (number = 3;; number += 2)
  {
    sp = sieve + (number - 3) / 2;
    if (sp >= &sieve[SIZE])
      break;
    if (*sp)
    {
      printf("%d\n", number);
      while ((sp += number) < &sieve[SIZE])
        *sp = FALSE;
    }
  }
  return EXIT_SUCCESS;
}
#pragma endregion code
