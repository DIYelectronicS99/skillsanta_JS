var temp = prompt('Enter temperature in Farenheit or Celcius; eg: 50C or, 50F');

function convert(t){

   

    if(t.includes('c') || t.includes('C')){
        var cen = parseFloat(t);

        var res = cen*(9/5)+32;
        
        document.write('temperature in Farenheit is: '+res+'F');

    }
    if(t.includes('f') || t.includes('F')){
        var far = parseFloat(t);

        var res = (far-32)*(5/9);
        
        document.write('Temperature in Celcius is: '+res+'C');

    }



}

convert(temp);