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
int func(void)
{
  static int counter = 1;

  return ++counter;
}

int main()
{
  int answer;
  answer = func() - func() * func();
  printf("%d\n", answer);
}

#pragma endregion code
