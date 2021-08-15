/*
#pragma region input
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
#pragma endregion input
*/

/*
#pragma region output
There should be one-- and preferably only one --obvious way to do it.
#pragma endregion output
*/

#pragma region code
#include <stdio.h>
#include <stdlib.h>

#define MAX_LEN 1001

int main(void)
{
  int len;
  char input[MAX_LEN];
  int longest_len = -1;
  char longest[MAX_LEN];

  while ((gets(input) != NULL))
  {
    len = strlen(input);
    if (longest_len < len)
    {
      longest_len = len;
      strcpy(longest, input);
    }
  }

  if (longest_len > 0)
    puts(longest);

  return EXIT_SUCCESS;
}
#pragma endregion code
