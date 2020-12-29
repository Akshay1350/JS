var userName = prompt("Enter user name:");
var password=prompt("Enter your password:");
var prodName=prompt("Enter product name:");

class Product{
    _productName;
    get ProductName(){
        return this._productName;
    }


    set ProductName(newName){
        if(userName=="john" && password=="root123")
        {
            this._productName=newName;
        }else{
            document.write("You are not authorized to set product name:")
        }
    }
}

var tv= new Product();
tv.ProductName= prodName; // setter
if(tv.ProductName){
    document.write(`Name=${tv.ProductName}`);
}
