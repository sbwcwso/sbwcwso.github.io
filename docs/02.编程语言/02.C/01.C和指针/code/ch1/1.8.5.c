#pragma region comment
/*
** 这个程序从标准输入中读取输入行并在标准输出中打印这些输入行，
** 每个输入行的后面一行是该行内容的一部分。
**
** 输入的笫 1 行是一串列标号，串的最后以一个负数结尾。
** 这些列标号成对出现，说明需要打印的输入行的列的范围．
** 例如， 0 3 10 12 -1 表示笫 0 列到第 3 列，第 10 列到第 12 列的内容将被打印．
*/
#pragma endregion comment

/*
#pragma region input
12 20 0 4 -1
abcdefghijklmnopqrstuvwxyz
Hello there, how are you?
I am fine, thanks.
See you!
Bye

#pragma endregion input
*/

/*
#pragma region output
Original input : abcdefghijklmnopqrstuvwxyz
Rearranged line: mnopqrstuabcde
Original input : Hello there, how are you?
Rearranged line:  how are Hello
Original input : I am fine, thanks.
Rearranged line: hanks.
Original input : See you!
Rearranged line: See y
Original input : Bye
Rearranged line: Bye

#pragma endregion output
*/

#pragma region preprocessor_directives
#pragma region code
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_COLS 20    /* 所能处理的最大列号 */
#define MAX_INPUT 1000 /* 每个输入行的最大长度 */
#pragma endregion preprocessor_directives

#pragma region function_prototype
int read_column_numbers(int columns[], int max);
void rearrange(char *output, char const *input, int n_columns, int const columns[]);
#pragma endregion function_prototype

#pragma region main1
int main(void)
{
#pragma endregion main1
#pragma region main2
  int n_columns;          /* 进行处理的列标号 */
  int columns[MAX_COLS];  /* 需要处理的列数 */
  char input[MAX_INPUT];  /* 容纳输入行的数组 */
  char output[MAX_INPUT]; /* 容纳输出行的数组 */
#pragma endregion main2
#pragma region main3
  /*
  ** 读取该串列标号
  */
  n_columns = read_column_numbers(columns, MAX_COLS);
#pragma endregion main3
#pragma region main4
  /*
  ** 读取、处理和打印剩余的输入行
  */
  while (gets(input) != NULL)
  {
    printf("Original input : %s\n", input);
    rearrange(output, input, n_columns, columns);
    printf("Rearranged line: %s\n", output);
  }
  return EXIT_SUCCESS;
}
#pragma endregion main4
#pragma region read_column_numbers1
/*
** 读取列标号， 如果超出范围则不予理会。
*/

int read_column_numbers(int columns[], int max)
{
#pragma endregion read_column_numbers1
#pragma region read_column_numbers2
  int num = 0;
  int ch;
#pragma endregion read_column_numbers2

#pragma region read_column_numbers3
  /* 
  ** 取得列标号，如果所读取的数小于 0 则停止.
  */
  while (num < max && scanf("%d", &columns[num]) == 1 && columns[num] >= 0)
    num += 1;
#pragma endregion read_column_numbers3
#pragma region read_column_numbers4
  /*
  ** 确认已经读取的标号为偶数个，因为它们是以成对的形式出现的。
  */
  if (num % 2 != 0)
  {
    puts("Last column number is not paired.");
    exit(EXIT_FAILURE);
  }
#pragma endregion read_column_numbers4

#pragma region read_column_numbers5
  /*
  ** 丢弃该行中包含最后一个数字的那部分内容
  */

  while ((ch = getchar()) != EOF && ch != '\n')
    ;
#pragma endregion read_column_numbers5

#pragma region read_column_numbers6
  return num;
}
#pragma endregion read_column_numbers6

/*
**  处理输入行，将指定列的字符连接在一起，输出行以 NUL 结尾。
*/

void rearrange(char *output, char const *input, int n_columns, int const columns[])
{
  int col;        /* columns 数组的下标 */
  int output_col; /* 输出列计数器 */
  int len;        /* 输入行的长度 */

  len = strlen(input);
  output_col = 0;

  /*
  ** 处理每对列标号
  */
  for (col = 0; col < n_columns; col += 2)
  {
    int nchars = columns[col + 1] - columns[col] + 1;
    /*
    ** 如果输入行结束，则读入下一对列标号
    */
    if (columns[col] >= len)
      continue;

    /*
    ** 如果输出行数组已满，则结束任务
    */
    if (output_col == MAX_INPUT - 1)
      break;

    /*
    ** 如果输出行数据空间不够，只复制可又容纳的字符数
    */
    if (output_col + nchars > MAX_INPUT - 1)
      nchars = MAX_INPUT - output_col - 1;

    /*
    ** 复制相关数据
    */
    strncpy(output + output_col, input + columns[col], nchars);
    output_col += nchars;
  }
  output[output_col] = '\0';
}

#pragma endregion code