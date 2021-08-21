// Best price 
const bestPriceField = document.getElementById('best-price');



// Memory
const memory1 = document.getElementById('memory-1');
const memory2 = document.getElementById('memory-2');
const extraMemoryCost = document.getElementById('extra-memory-cost');


memory1.addEventListener('click', function () {
    extraMemoryCostField.innerText = '0';
});
memory2.addEventListener('click', function () {
    extraMemoryCostField.innerText = '180';
});

//  Storage
const storage1 = document.getElementById('storage-1');
const storage2 = document.getElementById('storage-2');
const storage3 = document.getElementById('storage-3');
const extraStorageCostField = document.getElementById('extra-storage-cost');


storage1.addEventListener('click', function () {
    extraStorageCostField.innerText = '0';
});
storage2.addEventListener('click', function () {
    extraStorageCostField.innerText = '100';
});
storage3.addEventListener('click', function () {
    extraStorageCostField.innerText = '180';
});


// Delivery
const delivery1 = document.getElementById('delivery-1');
const delivery2 = document.getElementById('delivery-2');
const deliveryChargeCostField = document.getElementById('delivery-charge');


delivery1.addEventListener('click', function () {
    deliveryChargeCostField.innerText = '0';
});
delivery2.addEventListener('click', function () {
    deliveryChargeCostField.innerText = '20';
})

// Total price 
const totalPrice = document.getElementById('total-price');
const finalTotal = document.getElementById('final-total');

// Total price function 
function total() {

    const bestPrice = parseInt(bestPriceField.innerText);
    const extraMemoryCost = parseInt(extraMemoryCostField.innerText);
    const extraStorageCost = parseInt(extraStorageCostField.innerText);
    const deliveryCharge = parseInt(deliveryChargeField.innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCostField + deliveryChargeCostField;
    totalPrice.innerText = totalPrice;
    finalTotal.innerText = totalPrice;
}