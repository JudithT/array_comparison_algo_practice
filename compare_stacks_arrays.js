function stackcomp(arr1,arr2){
  if (arr1.length!=arr2.length){
    console.log("The arrays are not the same!");
    return false;
  }
  for(var i = 0; i<arr1.length;i++){
    if (arr1[i]!=arr2[i]){
      console.log("The arrays are not the same!");
      return false;
    }
  }
  console.log("the arrays are the same");
  return true;

}
arr1=[1,2,3,4,5,7]
arr2=[1,2,3,4,5]

var x = stackcomp(arr1,arr2);
console.log(x);
