/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
T(11) = 177
T(25) = 150049
T(50) = 25172538049

#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

/*
** Compute the value of the n'th Fibonacci number, iteratively.
*/
long
fibonacci( int n )
{
	long	result;
	long	previous_result;
	long	next_older_result;

	result = previous_result = 1;

	while( n > 2 ){
		n -= 1;
		next_older_result = previous_result;
		previous_result = result;
		result = previous_result + next_older_result;
	}
	return result;
}


int main(void)
{
  int numbers[3] = {11, 25, 50};
  int i;

  for(i = 0; i < 3; i++)
    printf("T(%d) = %ld\n", numbers[i], 2 * fibonacci(numbers[i]) - 1);
  return EXIT_SUCCESS;
}

#pragma endregion code
