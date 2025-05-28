function logProduct(p) {
    console.log("product id: ".concat(p.id, ", name: ").concat(p.name, ", price is ").concat(p.price, ", and the stock :").concat(p.inStock));
}
;
logProduct({ id: 1, name: "book", price: 500, inStock: false });
var ProductOrError;
ProductOrError = { id: 1, name: "book", price: 500, inStock: false };
console.log("ProductOrError: " + ProductOrError.name);
ProductOrError = "kihfpisnk;prih";
console.log(ProductOrError);
function wrapValue(value) {
    return value;
}
console.log(wrapValue([1, 2, 3, 4, 4]));
function ApiResultfunc(value) {
    if (value.success) {
        console.log("product id: ".concat(value.data.id, ",\n             name: ").concat(value.data.name, ",\n             price is ").concat(value.data.price, ",\n             and the stock :").concat(value.data.inStock));
    }
    else {
        console.log(value.message);
    }
}
// ApiResultfunc({data:{id:1, name: "book", price:500, inStock:false}, success:false, message:"failed"});
var result = {
    data: {
        id: 22,
        name: "phone",
        price: 99,
        inStock: true
    },
    success: true,
    message: "successfull"
};
ApiResultfunc(result);
