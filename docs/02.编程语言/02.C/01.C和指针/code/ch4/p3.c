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
** Classify the type of a triangle given the lengths of its sides.
*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  float a, b, c;
  float temp;

  /*
  ** Prompt for and read data
  */

  printf("Enter the lengths of the three sides of the triangle: ");
  scanf("%f %f %f", &a, &b, &c);

  /*
  ** Rearrange the values so that a >= b >= c 
  */

  if (a < b)
  {
    temp = a;
    a = b;
    b = temp;
  }
  if (a < c)
  {
    temp = a;
    a = c;
    c = temp;
  }
  if (b < c)
  {
    temp = b;
    b = c;
    c = temp;
  }

  /*
  ** Justify the type of the triangle
  */

  if (c <= 0 || b + c <= a)
    printf("Not a triangle\n");
  else if (a == b && b == c)
    printf("The triangle is an equilateral triangle.\n");
  else if (a == b || b == c)
    printf("The triangle is an isosceles triangle.\n");
  else
    printf("The triangle is a scalene triangle.\n");

  return EXIT_SUCCESS;
}

#pragma endregion code
