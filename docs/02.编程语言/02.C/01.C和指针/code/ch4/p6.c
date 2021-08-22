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

int substr(char dst[], char src[], int start, int len)
{
  int dst_index;
  int src_index;

  dst_index = 0;

  /*
  ** Advance src_index to right spot to begin, but stop if reach the terminating NUL byte.
  */
  for (src_index = 0; src_index < start && src[src_index] != NUL; src_index++)
    ;

  /*
  ** Copy the desired number of characters, but stop at the NUL.
  */
  while (src[src_index] != NUL && len > 0)
  {
    dst[dst_index++] = src[src_index++];
    len--;
  }

  dst[dst_index] = '\0';
  return dst_index;
}

#pragma endregion code
