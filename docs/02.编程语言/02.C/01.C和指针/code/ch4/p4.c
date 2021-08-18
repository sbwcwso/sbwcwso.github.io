/*
#pragma region input
#pragma endregion input
*/

/*
#pragma region output
#pragma endregion output
*/

#pragma region code
/*
** copy n characters form src to dst(if necessary , fill with nul)
*/

#define NUL '\0'

void copy_n(char dst[], char src[], int n)
{
  for (int dst_index = 0, src_index = 0; dst_index < n; dst_index++)
  {
    dst[dst_index] = src[src_index];
    if (src[src_index] != NUL)
      src_index += 1;
  }
}
#pragma endregion code
