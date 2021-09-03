/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
The range of 'char' is -128 ~ 127
The maximum of 'unsigned char' is 255
The range of 'short int' is -32768 ~ 32767
The maximum of 'unsigned short int' is 65535
The range of 'int' is -2147483648 ~ 2147483647
The maximum of 'unsigned int' is 4294967295
The range of 'long int' is -9223372036854775808 ~ 9223372036854775807
The maximum of 'unsigned long int' is 18446744073709551615
The range of 'long long int' is -9223372036854775808 ~ 9223372036854775807
The maximum of 'unsigned long long int' is 18446744073709551615

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <limits.h>

int main(void)
{
  printf("The range of 'char' is %d ~ %d\n", SCHAR_MIN, SCHAR_MAX);
  printf("The maximum of 'unsigned char' is %u\n", UCHAR_MAX);
  printf("The range of 'short int' is %d ~ %d\n", SHRT_MIN, SHRT_MAX);
  printf("The maximum of 'unsigned short int' is %u\n", USHRT_MAX);
  printf("The range of 'int' is %d ~ %d\n", INT_MIN, INT_MAX);
  printf("The maximum of 'unsigned int' is %u\n", UINT_MAX);
  printf("The range of 'long int' is %ld ~ %ld\n", LONG_MIN, LONG_MAX);
  printf("The maximum of 'unsigned long int' is %lu\n", ULONG_MAX);
  printf("The range of 'long long int' is %lld ~ %lld\n", LLONG_MIN, LLONG_MAX);
  printf("The maximum of 'unsigned long long int' is %llu\n", ULLONG_MAX);
}

#pragma endregion code
