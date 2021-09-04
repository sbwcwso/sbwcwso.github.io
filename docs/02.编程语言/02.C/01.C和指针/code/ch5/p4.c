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
** Implements an array of bits in a character array.
*/

#include <limits.h>
#include "bitarray.h"

/*
** Compute the character that will contain the desired bit
*/
unsigned character_offset(unsigned bit_number)
{
  return bit_number / CHAR_BIT;
}

/*
** Compute the bit number within the desired character
** Starts at 0
*/
unsigned bit_offset(unsigned bit_number)
{
  return bit_number % CHAR_BIT;
}

/*
** Sets the specified bit to one
*/
void set_bit(char bit_array[], unsigned bit_number)
{
  bit_array[character_offset(bit_number)] |= 1 << bit_offset(bit_number);
}

/*
** Clear the specified bit to zero
*/
void clear_bit(char bit_array[], unsigned bit_number)
{
  bit_array[character_offset(bit_number)] &= ~(1 << bit_offset(bit_number));
}

/*
** Set the specified bit to zero if the "value" is zero,
** otherwise it sets the bit to one
*/
void assign_bit(char bit_array[], unsigned bit_number, int value)
{
  if (value == 0)
    clear_bit(bit_array, bit_number);
  else
    set_bit(bit_array, bit_number);
}

/*
** Return true if the specified bit is nonzero, else false.
*/
int test_bit(char bit_array[], unsigned bit_number)
{
  return (bit_array[character_offset(bit_number)] & 1 << bit_offset(bit_number)) != 0;
}

#pragma endregion code
