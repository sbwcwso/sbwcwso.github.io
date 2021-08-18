/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
#pragma endregion output
*/

#pragma region code

#define NUL '\0'

int is_white(int ch)
{
  return ch == ' ' || ch == '\t' || ch == '\v' || ch == '\n' || ch == '\r' || ch == '\f';
}

void deblank(char string[])
{
  char *src;
  char *dest;
  int ch;

  src = string;
  dest = string;

  while ((ch = *src++) != NUL)
    if (is_white(ch))
    {
      if (dest == string || !is_white(dest[-1]))
        *dest++ = ' ';
    }
    else
      *dest++ = ch;

  *dest = NUL;
}

#pragma endregion code
