/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
Fibonacci(01) =  1, Fibonacci(01)_counter = 1
Fibonacci(02) =  1, Fibonacci(02)_counter = 1
Fibonacci(03) =  2, Fibonacci(03)_counter = 3
Fibonacci(04) =  3, Fibonacci(04)_counter = 5
Fibonacci(05) =  5, Fibonacci(05)_counter = 9
Fibonacci(06) =  8, Fibonacci(06)_counter = 15
Fibonacci(07) = 13, Fibonacci(07)_counter = 25
Fibonacci(08) = 21, Fibonacci(08)_counter = 41
Fibonacci(09) = 34, Fibonacci(09)_counter = 67
Fibonacci(10) = 55, Fibonacci(10)_counter = 109

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

int counter;

/*
** Compute the value of the n'th Fibonacci number, recursively.
*/

long
fibonacci( int n )
{
  counter++;
	if( n <= 2 )
		return 1;

	return fibonacci( n - 1 ) + fibonacci( n - 2 );
}

int main(void)
{
  int i;
  long j;
  for(i=1; i <= 10; i++)
  {
    counter = 0;
    j = fibonacci(i);
    printf(
      "Fibonacci(%02d) = %2ld, Fibonacci(%02d)_counter = %d\n", 
      i, j, i, counter);
  }
  return EXIT_SUCCESS;
}

#pragma endregion code
