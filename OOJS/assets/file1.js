var arr=[1,2,3,4,5];
function print(i)
{

if(i<arr.length)
{
setTimeout(function(){console.log(arr[i]);
print(++i);},3000); }}
print(0);