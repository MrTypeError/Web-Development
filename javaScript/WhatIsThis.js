function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+"Started");
        console.log(this);
        
    }
}

let Swift=Car("Swift");
// Swift.start();
console.log(this.name);
console.log(this);