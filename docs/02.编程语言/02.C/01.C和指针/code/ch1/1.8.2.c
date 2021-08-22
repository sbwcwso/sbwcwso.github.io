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
1 The Zen of Python, by Tim Peters
2 
3 Beautiful is better than ugly.
4 Explicit is better than implicit.
5 Simple is better than complex.
6 Complex is better than complicated.
7 Flat is better than nested.
8 Sparse is better than dense.
9 Readability counts.
10 Special cases aren't special enough to break the rules.
11 Although practicality beats purity.
12 Errors should never pass silently.
13 Unless explicitly silenced.
14 In the face of ambiguity, refuse the temptation to guess.
15 There should be one-- and preferably only one --obvious way to do it.
16 Although that way may not be obvious at first unless you're Dutch.
17 Now is better than never.
18 Although never is often better than *right* now.
19 If the implementation is hard to explain, it's a bad idea.
20 If the implementation is easy to explain, it may be a good idea.

#pragma endregion output
*/

#pragma region code
/*
** 读取字符串并按行输出
*/

#include <stdio.h>
#include <stdlib.h>

int main(void)
{
  int ch;
  int line = 0;
  int at_begining = 1;

  while ((ch = getchar()) != EOF)
  {
    // 检查是否处于行首
    if (at_begining)
    {
      at_begining = 0;
      line += 1;
      printf("%d ", line);
    }

    // 检查是否处于行尾
    if (ch == '\n')
      at_begining = 1;

    // 打印字符
    putchar(ch);
  }

  return 0;
}

#pragma endregion code
