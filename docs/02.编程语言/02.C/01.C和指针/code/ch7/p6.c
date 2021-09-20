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
/*
** Convert a numberic value to words;
*/

static char *digits[] = {
    "", "ONE ", "TWO ", "THREE ", "FOUR ", "FIVE ", "SIX ", "SEVEN ",
    "EIGHT ", "NINE ", "TEN ", "ELEVEN ", "TWELVE ", "THIRTEEN ",
    "FOURTEEN ", "FIFTEEN ", "SIXTEEN ", "SEVENTEEN ", "EIGHTEEN ",
    "NINETEEN "};

static char *tens[] = {
    "", "", "TWENTY ", "THIRTY ", "FORTY ", "FIFTY ", "SIXTY ", "SEVENTY ",
    "EIGHTY ", "NINETY "};

static char *magnitudes[] = {
    "", "THOUSAND ", "MILLION ", "BILLION "};

static handle_on_group(unsigned int amount, char *buffer, char **magnitude)
{
  unsigned int value;
  value = amount / 1000;
  if (value > 0)
    handle_on_group(value, buffer, magnitude + 1);

  amount %= 1000;
  value = amount / 100;
  if (value > 0)
  {
    strcat(buffer, digits[value]);
    strcat(buffer, "HUNDRED ");
  }

  amount %= 100;
  if (amount >= 20)
  {
    strcat(buffer, tens[amount / 10]);
    amount %= 10;
  }

  strcat(buffer, digits[amount]);
  strcat(buffer, *magnitude);
}

void written_amount(unsigned int amount, char *buffer)
{
  if (amount == 0)
    strcat(buffer, "ZERO ");
  else
    handle_on_group(amount, buffer, magnitudes);
}

#pragma endregion code

int main(void)
{
  char buffer[1200];
  unsigned int number = 16312;

  written_amount(number, buffer);
  printf("%s-\n", buffer);
  return EXIT_SUCCESS;
}