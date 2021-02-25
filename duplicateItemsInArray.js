//find and remove duplicate items in array

var items=[1,2,3,4,5,1,5];
var withOutDuplicate=[];
var len=items.length;

for(let i=0; i<=len; i++){
  if(withOutDuplicate.indexOf(items[i]) === -1){
    //if elements of i not found in withOutDuplicate
  //if not found indexOF() return -1
  //if WithoutDuplicate never find any elements of item it return -1
  withOutDuplicate.push(items[i]);

  }
  

  }
  console.log(withOutDuplicate);




