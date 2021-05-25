function rem(arr, val){

  for(let i = 0; i<arr.length; i++){
    if(arr[i] == val){
      arr.splice(i, 1);
    }
  }
  return arr;
}


function difference(arr1, arr2){

  var len1 = arr1.length;
  var len2 = arr2.length;
  console.log(arr1);
  console.log(arr2);


  for(let i = 0; i< len1; i++)
  {
    if(arr2.includes(arr1[i])){

      console.log(arr1[i]);
      arr2 = rem(arr2, arr1[i]);
      //arr2.splice(i,1);

    }
  }

  console.log(arr1);
  console.log(arr2);

  for(let j = 0; j< arr2.length; j++)
  {
    arr1.push(arr2[j]);
  }
  return arr1;

}

document.write(difference( [1,2,3,4,5] , [3,2,5,6] ));