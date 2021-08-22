/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output
Please Enter a positive number: 

#pragma endregion output
*/

#pragma region code
/*
** Compute the square root of a number.
*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  float number;
  float new_guess;
  float pre_guess;

  /*
  ** Prompt for and read the data, then check it.
  */
  printf("Please Enter a positive number: ");
  scanf("%f", &number);

  if (number <= 0)
  {
    printf("Wrong input, can not compute the square root of a non-positive number.");
    return EXIT_FAILURE;
  }

  /*
  ** Compute approximations to the square root 
  ** until they don't change any more.
  */

  new_guess = 1;
  printf("%.8e\n", new_guess);
  do
  {
    pre_guess = new_guess;
    new_guess = (pre_guess + number / pre_guess) / 2;
    printf("%.8e\n", new_guess);
  } while (new_guess != pre_guess);

  printf("The square root of %g is %.5e\n", number, new_guess);

  return EXIT_SUCCESS;
}

#pragma endregion code
