/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#include <stdio.h>

#pragma region code
#include <limits.h>

#define INT_BITS (CHAR_BIT * sizeof(int))

/*
** Store a value in an arbitrary field in an integer.
*/
int store_bit_field(int original_value,
                    int value_to_store,
                    unsigned starting_bit, unsigned ending_bit)
{
  unsigned mask;

  /*
  ** Step 1: creat mask
  */
  mask = (unsigned)-1;
  mask >>= INT_BITS - (starting_bit - ending_bit + 1);
  mask <<= ending_bit;

  /*
  ** Validate the bit parameters, if an error is found, do nothing.
  */
  if (starting_bit < INT_BITS && ending_bit < INT_BITS &&
      starting_bit >= ending_bit)
  {
    /*
    ** Step 2: using the one's complement of the mask, 
    ** clear all the bits in the field of original_value
    */
    original_value &= ~mask;

    /*
    ** Step 3: shift the new value left so that
    ** it is aligned in the filed on the right
    */
    value_to_store <<= ending_bit;

    /*
    ** Step 4: and the shifted value with the mask to
    ** ensure that it has no bits outside of the filed
    */
    value_to_store &= mask;

    /*
    ** Step 5: or the resulting value into the original integer
    */
    original_value |= value_to_store;
  }

  return original_value;
}

#pragma endregion code

int main()
{
  printf("%x\n", store_bit_field(0x0, 0x1, 4, 4));
  printf("%x\n", store_bit_field(0xffff, 0x123, 15, 4));
  printf("%x\n", store_bit_field(0xffff, 0x123, 13, 9));
}
