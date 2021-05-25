var str = prompt('Enter a string:');


function countVowel(str)
{
  var a =0;
  var e =0;
  var I =0;
  var o =0;
  var u =0;


  for(let i =0; i< str.length; i++){

     if(str[i].match('a') || str[i].match('A'))
     a+=1;
     if(str[i].match('e') || str[i].match('E'))
     e+=1;
     if(str[i].match('i') || str[i].match('I'))
     I+=1;
     if(str[i].match('o') || str[i].match('O'))
     o+=1;
     if(str[i].match('u') || str[i].match('U'))
     u+=1;


  }

  if(a!=0){ 
    document.write('A: '+a+'<br>'); }

  if(e!=0){ 
    document.write('E: '+e+'<br>'); }

  if(I!=0){ 
    document.write('I: '+I+'<br>'); }

  if(o!=0){ 
    document.write('O: '+o+'<br>'); }

  if(u!=0){ 
    document.write('U: '+u+'<br>'); }



}

countVowel(str);