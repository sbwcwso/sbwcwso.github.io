/*
#pragma region input

#pragma endregion input
*/

/*
#pragma region output

#pragma endregion output
*/

#include <stdio.h>
#include <stdlib.h>

#pragma region code
#include <float.h>

static float limits[] = {0, 23350, 56550, 117950, 256500, FLT_MAX};
static float base_tax[] = {0, 3502.5, 12798.5, 31832.5, 81710.5};
static float percentage[] = {0.15, 0.28, 0.31, 0.36, 0.396};

/*
** Calculate the 1995 U.S appropriate amount of tax.
*/
float single_tax(float income)
{
  int category;
  float tax;

  tax = 0;
  if (income > 0)
  {
    for (category = 1; income >= limits[category]; category++)
      ;
    category--;

    tax = base_tax[category] +
          percentage[category] * (income - limits[category]);
  }
  return tax;
}

#pragma endregion code

int main(void)
{
  float income = 1000;
  printf("single_tax(%f) = %f\n", income, single_tax(income));
}