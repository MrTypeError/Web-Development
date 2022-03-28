// Practice for getter 
// let square={
//     side:5,
//     get area(){
//         return(this.Side*this.Side);
//         return(this.side**2);

//     }
    
// }

// square.side=100;
// console.log(square.area);

function SrtingConcat(seperator,...array){
    let NewStr="";
    for(i=0;i<array.length;i++){
        NewStr+=seperator+array[i];
    }
    return NewStr;
}

// array=["Sudip Dutta"];
console.log(SrtingConcat("+","This","Is","Good","Thing"));
