// exersise using objects 
// itemName
// price 
// discount
// itemCode 

let newObj={
    itemName:"SmartPhone",
    price : 20000,
    discount:10,
    itemCode : "NO1",
}

// Factory Function
function newObjF(item,priceArg,discount,itemcode){
    return{
            itemName:item,
            price:priceArg,
            discount:discount,
            itemCode :itemcode,
        }
    }
const Laptop=newObjF("Laptop",100000,20,"LP1");

// Constructor Function
function NewObj(item,priceArg,discount,itemcode){
    this.itemName=item;
    this.price =priceArg;
    this.discount=discount;
    this.itemCode =itemcode;
    thsi.discount_cal= function (){
        temp=(priceArg*discount)/100;
        console.log("Your Discount is :-",temp,`For the product${item}`);
        console.log("Thanks for Shopping");
    }
}
const Mobile= new NewObj("Oneplus",25000,5,"MB2");