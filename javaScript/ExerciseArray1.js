const character=[{
    name:"Tarak Matha",
    height:"172",
    mass:"77",
    eye_color:"Brown",
    gender:"male"
},
{
    name:"JethaLal",
    height:"145",
    mass:"136",
    eye_color:"Black",
    gender:"male"
},
{
    name:"Babita Ji",
    height:"150",
    mass:"49",
    eye_color:"grey",
    gender:"female"
},
{
    name:"Himesh reshmia",
    height:"168",
    mass:"84",
    eye_color:"Black",
    gender:"male"
},];
//get an array of all names 
const Name=character.map(person=> person.name)
    // console.log(Name)

//get an arry of objects with name and height properties
const Prop1=character.map(ch =>{
    // console.log({name:ch.name, height:ch.height})
})

//get the total height of all character
const TotalH=character.reduce((perviousHeight,character)=>
{
    return perviousHeight+Number(character.height)
},0);
// console.log(TotalH);

//get character with mass greater then 100
MassCh=character.filter(element => Number(element.mass)>100)
// console.log(MassCh);

//get all male characters
gendrCh=character.filter(ch=>ch.gender=='male')
// console.log(gendrCh);

//sort by gender
sortGender=character.sort((ch1,ch2)=>{
    if(ch1.gender>ch2.gender) {
        return -1
    }
    
    if(ch1.gender<ch2.gender){
        return 1
    }
    return 0
})
// console.log(sortGender);

//sort by name
sortName=character.sort((ch1,ch2) => {
    if(ch1.name<ch2.name){
        return -1;
    }
    if (ch1.name>ch2.name){
        return 1;
    }
    return 0;
});
// console.log(sortName);

//does every character have mass more than 40?

const ChCheck=character.every(ch1 =>ch1.mass>40);
// console.log(ChCheck);

//does every character have blue eyes 

// console.log(character.every(ch => ch.eye_color==="Blue"));

//Is there atlist one male character 
// console.log(character.some(ch => ch.gender ==="male"));

//is there one character with height greater then 200?

console.log(character.some(ch => Number(ch.height) > 200));

