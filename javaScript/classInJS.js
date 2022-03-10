// Decleration of Class in Two ways 
// class Product{
//     constructor(itemName,itemPrice,discount,itemCode){
//         this.itemName=itemName;
//         this.itemPrice=itemPrice;
//         this.discount=discount;
//         this.itemCode=itemCode;
//     }

// }
class Product{
    constructor(itemName){
        this.itemName=itemName;
    }
    getName(){
        return this.itemName+" - It's the name of the product"
    }

}
class furniture extends Product{
    constructor(itemName){
        // it basically calls the cunstroctor of the parent class 
        super(itemName);
    }
    getName(){
        this.itemName+"This is a furniture"
    }
}

let pencil=new Product("Pencil",20,2,"PE1");

// const Product1=class Product{
//     constructor(itemName,itemPrice,discount,itemCode){
//         this.itemName=itemName;
//         this.itemPrice=itemPrice;
//         this.discount=discount;
//         this.itemCode=itemCode;
//     }
//     // getter
//     get getDiscount(){
//         return(this.discount);
//     }
//     // setter
//     set setDiscount(value){
//         this.discount=value;
//     }
//     // this is a methor but basically it will allow you to do the same functionality as getter allows you.
//     // but when you are calling a function you have to give () but in setter you don't.
//     DiscountValue(){
//         return this.discount*this.itemPrice/100;

//     }
// };

// let chair=new Product1("Chair",499,10,"CH1");
