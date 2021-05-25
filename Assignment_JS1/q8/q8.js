
function checkOddEven(num)
{
  if(num%2 == 0)
   return " is even";
  else  
   return " is odd"; 
}

for(let i = 20; i<=30; i++){

  document.write(i+ checkOddEven(i)+'<br>');

}