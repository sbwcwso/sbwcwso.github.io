/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
1
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
#pragma endregion output
*/

#pragma region code
/*
** Compute and print all the prime numbers from 1 to 100
*/
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  int number;
  int divisor;

  /*
  ** One and two are prime
  */
  printf("1\n2\n");

  /*
  ** No other even number are prime; look at the remaining odd ones;
  */
  for (number = 3; number <= 100; number += 2)
  {
    /*
    ** If a number i can't be divides by the number below  ⌊ i /2 ⌋ , then it's a prime
    ** An odd can not be divided by an even
    */

    for (divisor = 3; divisor <= number / 2; divisor += 2)
      if (number % divisor == 0)
        break;
    if (divisor > number / 2)
      printf("%d\n", number);
  }
  return EXIT_SUCCESS;
}
#pragma endregion code
