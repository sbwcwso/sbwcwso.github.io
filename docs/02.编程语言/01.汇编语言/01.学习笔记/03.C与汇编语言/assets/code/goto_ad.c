int goto_ad(int x, int y)
{
  int result;
  if (x<=y) goto Else;
  result = x - y;
Exit:
  return result;
Else:
  result = y - x;
  goto Exit;
}