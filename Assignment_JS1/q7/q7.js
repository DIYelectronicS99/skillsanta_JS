function rmTags(str)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

var str = prompt('Enter string with HTML tags');
document.write(rmTags(str));