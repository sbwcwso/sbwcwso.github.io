/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
#pragma endregion output
*/

#pragma region code
int substr(char dst[], char src[], int start, int len)
{
  int dst_index = 0;
  if (start >= 0 && len > 0)
    while (src[start] != '\0' && len > 0)
    {
      dst[dst_index++] = src[start++];
      len--;
    }
  dst[dst_index] = '\0';
  return dst_index;
}
#pragma endregion code
