let helloButton =document.querySelector("button")
helloButton.addEventListener("click",inputBtn)

// function showMsg(){
//     alert("Hello User")
// }

function inputBtn(){
    let name=prompt("Enter the Name Of The Student :")
    helloButton.textContent= "Roll Number 1 :"+name;
}