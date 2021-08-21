// Best price 
const bestPriceField = document.getElementById('best-price');

// Memory
const memory1 = document.getElementById('memory-1');
const memory2 = document.getElementById('memory-2');
const extraMemoryCostField = document.getElementById('extra-memory-cost');

memory1.addEventListener('click', function () {
    extraMemoryCostField.innerText = '0';
    totalUpdate()
});
memory2.addEventListener('click', function () {
    extraMemoryCostField.innerText = '180';
    totalUpdate()
});

//  Storage
const storage1 = document.getElementById('storage-1');
const storage2 = document.getElementById('storage-2');
const storage3 = document.getElementById('storage-3');
const extraStorageCostField = document.getElementById('extra-storage-cost');

storage1.addEventListener('click', function () {
    extraStorageCostField.innerText = '0';
    totalUpdate()
});
storage2.addEventListener('click', function () {
    extraStorageCostField.innerText = '100';
    totalUpdate()
});
storage3.addEventListener('click', function () {
    extraStorageCostField.innerText = '180';
    totalUpdate()
});

// Delivery
const delivery1 = document.getElementById('delivery-1');
const delivery2 = document.getElementById('delivery-2');
const deliveryChargeCostField = document.getElementById('delivery-charge');

delivery1.addEventListener('click', function () {
    deliveryChargeCostField.innerText = '0';
    totalUpdate()
});
delivery2.addEventListener('click', function () {
    deliveryChargeCostField.innerText = '20';
    totalUpdate()
})

// Total price 
const totalPrice = document.getElementById('total-price');
const finalTotal = document.getElementById('final-total');
totalUpdate()

// Total price function 
function totalUpdate() {
    const bestPrice = parseInt(bestPriceField.innerText);
    const extraMemoryCost = parseInt(extraMemoryCostField.innerText);
    const extraStorageCost = parseInt(extraStorageCostField.innerText);
    const deliveryCharge = parseInt(deliveryChargeCostField.innerText);
    const total = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    totalPrice.innerText = total;
    finalTotal.innerText = total;
}
// promo code function
function getPromoCode() {
    document.getElementById('promo-code-apply').addEventListener('click', function () {
        const promoCodeField = document.getElementById('promo-code-input');
        const promoCode = promoCodeField.value;
        const bestPrice = parseInt(bestPriceField.innerText);
        const extraMemoryCost = parseInt(extraMemoryCostField.innerText);
        const extraStorageCost = parseInt(extraStorageCostField.innerText);
        const deliveryCharge = parseInt(deliveryChargeCostField.innerText);
        const total = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
        totalPrice.innerText = total;
        finalTotal.innerText = total;
        if (promoCode == 'stevekaku') {
            finalTotal.innerText = parseInt(total * 0.8);
        } else {
            promoCodeField.value = '';
        }
        promoCodeField.value = '';
    })

}
getPromoCode()