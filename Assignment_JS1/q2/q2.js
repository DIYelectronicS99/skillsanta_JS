
var month = 
{
    "Jan": 01,
    "Feb": 02,
    "Mar": 03,
    "Apr": 04,
    "May": 05,
    "Jun": 06,
    "Jul": 07,
    "Aug": 08, 
    "Sep": 09,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
}

var dobStr = prompt('Enter DOB in format : DD/Mmm/YYYY')

if(dobStr.length != 11)
 document.write('error in format');
 else{

var dobVal = dobStr.split('/');

var yr = dobVal[2];

var mon = month[dobVal[1]];

var day = dobVal[0];

console.log(day + '/' + mon+ '/'+ yr);

var curdate = new Date();

var cday = String(curdate.getDate());

var cmon = String(curdate.getMonth() + 1); 

var cyr = curdate.getFullYear();

console.log(cday + '/' + cmon+ '/'+ cyr);

if(cyr - yr > 18  )
{
    document.write('yes');
    window.open("https://selfregistration.cowin.gov.in");
    
}
else if( cyr - yr == 18)
{
    if(cmon == mon)

    {
        if(cday >= day ){
            document.write('yes');
            window.open("https://selfregistration.cowin.gov.in");
        }
         

        else {
          document.write('not 18 years yet');
        }  
    }
    else if(cmon < mon){
    document.write('not 18 years yet');
}
    else {
    document.write('yes');
    window.open("https://selfregistration.cowin.gov.in");
    }
     
}

else
 document.write('not 18 years yet');

 }
//document.write(month[dobVal[1]]);