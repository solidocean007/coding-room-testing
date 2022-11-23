var beer = 14.99;
var chicken = 10.55;
var eggs = 12.99;
var bananas = 5.99;
var bread = 4.99;
var steak = 28.99;

var totalCost = beer + chicken + eggs + bananas + bread + steak;

console.log('Total Cost: ' + totalCost.toFixed(2));

var coupon25PercentOff = .25;

var priceAfterDiscount = totalCost - (totalCost * coupon25PercentOff);

var taxes = .0775 * priceAfterDiscount;

console.log('Price after coupon: ' + priceAfterDiscount);

console.log('Tax: ' + taxes);

var finalPrice = priceAfterDiscount + taxes;

console.log(finalPrice.toFixed(2));