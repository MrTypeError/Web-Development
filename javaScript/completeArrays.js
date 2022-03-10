const array=[1,2,3,4,5,6,7,8,9];
console.log(array[2])

// length of the array
console.log(array.length-1)

// push is like append in python it adds new values in the end
array.push(20)
console.log(array)


//unshift is similer to push, it adds element in the front of the array
array.unshift(100)
console.log(array)

//shift does the opposite of the unshift , it removes the 1 elements from the array.
array.shift()
console.log(array)

//pop() operation delets elements from the end 

del_ele=array.pop()
console.log(del_ele)
console.log(array)

const New_array=["Sudip","Sagar","Puki","Deblina","Sudip","Sagar"]

//this line will return -1 as output becouse there is no sudip in the array 
console.log(New_array.indexOf("sudip"))

// //this line will return '0' which is the 1st occurence of the number/character.
console.log(New_array.indexOf("Sudip"))

// //this line will return '4' which is the 2st occurence of the number/character.
console.log(New_array.indexOf("Sudip",1))

// //this will check from the last element to the 1st element and tell the last occurence 
// //output;-4
console.log(New_array.lastIndexOf("Sudip"))

// New_array.pop()
//output :- 0
console.log(New_array.lastIndexOf("Sudip",3))

// include() checks wheather the asked argument is there in the arry or not.
//it gives bool value 
result=New_array.includes("Sagar",2)
console.log(result)




let employee=[{
    name:"Sudip",
    age:21
},{
    name:"Sagar",
    age:28
}, {
    name:"Soumik",
    age:27
}];

// find() can be used in both premitive and reference data types
console.log(employee.find(function(element){
    return element.name==="Sagar"
}))

// arrow functions 
// if there are multiple arguments then we need to write it in this format 
console.log(employee.find((element,index)=>{
    return element.name==="Sagar"
}))

//arrow function for one argument, no return is required for this and it becomes small
console.log(employee.find(element=> element.name==="Sagar"))

//cocatitation 

console.log(New_array.concat("Deblina"))
console.log(New_array.concat(200))
console.log(New_array.concat(array))

Temp_array=New_array.concat(array)
console.log(Temp_array)

//This function removes all the values form the first and last as given in the argument
console.log(Temp_array.slice(1,10))

//Spread Operator
test1=['Sudip', 'Sagar', 'Puki', 'Deblina']
test2=[1, 2, 3, 4, 5, 6]
// it accepts value as well as the names of the array

console.log(...test1,...test2)
console.log(...['Sudip', 'Sagar', 'Puki', 'Deblina'],...[1, 2, 3, 4, 5, 6])

// for loop
for(let i=0;i<test1.length;i++){
    console.log(test1[i])
}

// for of loop
for (let i of test1){
    console.log(i)
}

// for-each method in JS
test1.forEach(function(i,index){
     console.log(i,index)
    
});

// join
let student=["H","E","L","L","O"]
New_val=student.join("")
New_val=student.join("_")
console.log(New_val)

//split 
console.log(New_val.split(""))

//filter function,similer to find function but much more useful
console.log(test1.filter(Element=> Element.length>6))
console.log(employee.filter(person=> person.age>=28))

// map function
update_val=employee.map(person=>person.age+1)
console.log(update_val)


