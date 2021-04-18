function iterateAndSum(arr) 
{
  a = 0;
  for(i = 0; i <= arr.length - 1; i++)
  {
    a += arr[i];
  }
  return a;
};

module.exports = iterateAndSum;
