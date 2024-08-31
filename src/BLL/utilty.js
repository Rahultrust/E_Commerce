export function getPriceAfterDiscount(price,discountPercentage){
    var discountedPrice=price-price*(discountPercentage/100)
    return discountedPrice.toFixed(2);
}
export function getCartTotalValue(arrCart){
    var totalCartValue=0;
    for(let e of arrCart){
        let dPrice=getPriceAfterDiscount(e.product.price,e.product.discountPercentage);
        totalCartValue+=dPrice*e.quantity;
    }
    return totalCartValue;
}