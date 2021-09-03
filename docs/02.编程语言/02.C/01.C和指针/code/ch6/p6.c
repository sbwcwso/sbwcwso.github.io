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

#define MAX_VALUE 10000000
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
  for (number = 3; number < MAX_VALUE; number += 2)
  {
    bit_number = (number - 3) / 2;
    if (test_bit(sieve, bit_number))
    {
      while ((bit_number += number) <= MAX_BIT_NUMBER)
        clear_bit(sieve, bit_number);
    }
  }

  int step = 1000000;
  int count;
  int interval_num = 1;
  float count_per_thousand;

  printf("Range of Numbers       Average # of Primes per Thousnad Numbers\n");
  count = 1;
  for (number = 3; number < MAX_VALUE; number += 2)
  {
    bit_number = (number - 3) / 2;
    if (number > interval_num * step)
    {
      count_per_thousand = count / (step / 1000.0);
      printf("%8d -- %8d: %10.3f\n", (interval_num - 1) * step, interval_num * step, count_per_thousand);
      interval_num++;
      count = 0;
    }

    if (test_bit(sieve, bit_number))
      count++;
  }
  count_per_thousand = count / (step / 1000.0);
  printf("%8d -- %8d: %10.3f\n", (interval_num - 1) * step, interval_num * step, count_per_thousand);

  return EXIT_SUCCESS;
}

#pragma endregion code
