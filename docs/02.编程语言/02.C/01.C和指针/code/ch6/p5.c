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
#include <limits.h>
#include "bitarray.h"

/*
**  MAX_VALUE is the max value in the "list"
** MAX_BIT_NUMBER is the bit number corresponding to MAX_VALUE, considering
** that only keep bits to represent the odd numbers starting with 3.
** SIZE is the number of characters needed to get enough bits.
*/

#define MAX_VALUE 1000
#define MAX_BIT_NUMBER ((MAX_VALUE - 3) / 2)
#define SIZE (MAX_BIT_NUMBER / CHAR_BIT + 1)

int main(void)
{
  char sieve[SIZE];
  int number;
  int bit_number;
  char *sp;

  for (sp = sieve; sp < &sieve[SIZE]; sp++)
    *sp = ~0;
  printf("2\n");
  for (number = 3; number < MAX_VALUE; number += 2)
  {
    bit_number = (number - 3) / 2;
    if (test_bit(sieve, bit_number))
    {
      printf("%d\n", number);
      while ((bit_number += number) <= MAX_BIT_NUMBER)
        clear_bit(sieve, bit_number);
    }
  }

  return EXIT_SUCCESS;
}

#pragma endregion code
