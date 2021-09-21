#define SIZE 50
int x[SIZE];
int y[SIZE];
int i;
int *p1, *p2;

void try1()
{
  for (i = 0; i < SIZE; i++)
    x[i] = y[i];
}
