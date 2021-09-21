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
#include <string.h>

#define SIZE 100

int main(void)
{
#pragma region code
  char buffer[SIZE];
  char *front, *rear;

  front = buffer;
  rear = buffer + strlen(buffer) - 1;

  while (front < rear)
  {
    if (*front != *rear)
      break;
    front++;
    rear--;
  }
  if (front >= rear)
  {
    printf("It is a palindrome!\n");
  }
#pragma endregion code
  return EXIT_SUCCESS;
}
