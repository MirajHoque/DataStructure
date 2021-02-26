let mySet=new Set(); //initaialize a set

let mySet02=new Set(['1,2,2,4,5']); //initialize set( it can take iterative items as arguments)

mySet.add('hello'); //add values into set
mySet.add(2);
mySet.add(3);
mySet.add('string');

mySet.delete('string'); //delete values from set

mySet02.add('people'); // add value into mySet02

console.log(mySet); //printing set

console.log(mySet02); //printing mySet02

console.log(mySet.size); //retriving size of set
console.log(mySet02.size);

console.log(mySet.has(3)); //pasing size of set as argument...
//return boolean
// if it has that size return true  else return false