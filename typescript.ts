//1
interface Product{
    id:number;
    name:string;
    price:number;
    inStock:boolean;
}
//2
function logProduct (p:Product):void{
    console.log(`product id: ${p.id}, name: ${p.name}, price is ${p.price}, and the stock :${p.inStock}`)
};
logProduct({id:1, name: "book", price:500, inStock:false});

//3
let ProductOrError:Product | string ;

ProductOrError = {id:1, name: "book", price:500, inStock:false};
console.log( "ProductOrError: "+ ProductOrError.name);

ProductOrError = "kihfpisnk;prih"
console.log(ProductOrError);

//4
function wrapValue<T>(value:T[]){
    return value;
}
console.log(wrapValue<number>([1,2,3,4,4]));

//5
interface ApiResult<T>{
    data:T;
    success: boolean;
    message: string;
}
//Bonus
function ApiResultfunc(value:ApiResult<Product>):void{
    if(value.success){
        console.log(`product id: ${value.data.id},
             name: ${value.data.name},
             price is ${value.data.price},
             and the stock :${value.data.inStock}`
        )
    }else{
        console.log(value.message);
        
    }
}
ApiResultfunc({data:{id:1, name: "book", price:500, inStock:false}, success:false, message:"failed"});

// another way:
// let result: ApiResult<Product> = {
//     data:{
//         id:22,
//         name:"phone",
//         price:99,
//         inStock:true
//     },
//     success:true,
//     message:"successfull"
// }
// ApiResultfunc(result);

