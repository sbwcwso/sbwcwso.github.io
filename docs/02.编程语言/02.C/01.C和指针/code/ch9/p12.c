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

#pragma region code
#include <string.h>
#include <ctype.h>

#define TRUE 1
#define FALSE 0

int prepare_key(char *key)
{
  char *keyp;
  char *dup;

  if (*key == '\0')
    return FALSE;

  for (keyp = key; *keyp != '\0'; keyp++)
    if (!isupper(*keyp))
    {
      if (!islower(*keyp))
        return FALSE;
      *keyp = toupper(*keyp);
    }

  for (keyp = key; *keyp != '\0'; keyp++)
    for (dup = keyp + 1; (dup = strchr(dup, *keyp)) != NULL;)
      strcpy(dup, dup + 1);
  return TRUE;
}
#pragma endregion code

int main()
{
  char key[] = "TRAILBLAZeRS";
  if (prepare_key(key))
    printf("%s\n", key);
}