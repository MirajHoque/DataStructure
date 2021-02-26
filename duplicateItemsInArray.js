//ques: find and remove duplicate items in array

//step one using for loop and indexOf() approach
var items=[1,2,3,4,5,1,5]; //
var withOutDuplicate=[];
var duplicate=[];
var len=items.length;

for(let i=0; i<=len; i++){
  if(withOutDuplicate.indexOf(items[i]) === -1){
    //if elements of i not found in withOutDuplicate
  //if not found indexOF() return -1
  //if WithoutDuplicate never find any elements of item it return -1
  withOutDuplicate.push(items[i]);

  }
  else
  duplicate.push(items[i]);
  

  }
  console.log(withOutDuplicate); //removeing duplicate items
  console.log('duplicate items are:',duplicate);// finding duplicate items

//time complexity (N squere)
  


//step 02 using object

let a=[1,2,5,2,1,8];
var obj={};
 for(let elements of a){
   //for of  loop(for elements(value) of arrayname)
   obj[elements]=true;
   //key of obj= value for keys
 }
 console.log(obj); //return obj not array
 //key has to be unique so it only take unique value

console.log(Object.keys(obj));

