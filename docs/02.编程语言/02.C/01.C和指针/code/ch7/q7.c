#include <stdio.h>

int find_max( int array[10] )
{
  int i;
  int max = array[0];
  for( i = 1; i < 10; i += 1 )
    if( array[i] > max )
      max = array[i];
  return max;
} 

int main(void)
{
  int array[] = {122, 2, 3, 4, 5};
  printf("%d\n", find_max(array));
}