var str = prompt('Enter a string');

function rev(s)
{
    var tempstr = "";
    for (let i = s.length -1; i>=0; i-- )
    {
        tempstr = tempstr + s[i];
    }

    return tempstr;
}

function checkPalin(s)
{
    var len = s.length;
    var flag = 0;

    for(let i = 0; i< len/2; i++){
        if( s[i] != s[len -1 - i])
        {
            flag++;
            break;
        }
    }

    if(flag == 0)
     document.write(s+ ' is palindrome');
    else
     document.write(s+ ' is not palindrome')
}

document.write('Reversed string is '+rev(str)+'<br>');

checkPalin(str);