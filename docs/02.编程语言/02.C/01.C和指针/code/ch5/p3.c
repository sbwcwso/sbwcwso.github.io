/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
2550136832

#pragma endregion output
*/

#include <stdio.h>
#include <stdlib.h>

#pragma region code
/*
** Reverse the order of the bits in an unsigned integer value.
*/
unsigned int reverse_bits(unsigned int value)
{
  unsigned int result;

  result = 0;

  /*
  ** Keep going as long as i is nonzero. This makes the loop
  ** independent of the machine's word size, hence portable.
  */
  for (unsigned int i = 1; i != 0; i <<= 1)
  {
    result <<= 1;
    if ((value & 1) == 1)
      result |= 1;
    value >>= 1;
  }

  return result;
}

#pragma endregion code

int main(void)
{
  unsigned int num = 25;
  printf("%u\n", reverse_bits(num));
  return EXIT_SUCCESS;
}
