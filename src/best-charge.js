//tasking
//1.get price and count
//2.compare
//3.output
function bestCharge(selectedItems) {
  var originalPrice = 0,
    specialPrice = 0,
    halfPrice = 0,
    temp = 0;
  var allItems = loadAllItems,
    allPromotions = loadPromotions;
  var numbers = [],
    selectedNames = [];
  for (let i = 0; i < selectedItems.length; i++) {
    let selectedItemsObj = allItems.filter(function(elements, index, allItems) {
      allItems[index].id == selectedItems[i].split(" x ")[0];
    });
    numbers.push(selectedItems[i].split(" x ")[1]);
    items.push(selectedItems[i].split(" x ")[0]);
    unitNumbers = selectedItems[i].split(" x ")[1];
  }
  for (let j = 0; j < allItems.length; j++) {
    if (allItems[j].id = items && items != 'ITEM0001' && items != 'ITEM0022') {
      originalPrice += allItems[j].price * unitNumbers;
    } else if (items == 'ITEM0001' || items = 'ITEM0022') {
      halfPrice += allItems[j].price / 2 * unitNumbers;
    }
  }
  temp = originalPrice;
  originalPrice += halfPrice * 2;
  halfPrice += temp;
  specialPrice = originalPrice - Math.floor(originalPrice % 30) * 6;
}

function orderItems(selectedItemsObj) {
  document.write(`============= 订餐明细 =============`);
  for (let n = 0; n < numbers.length; n++) {
    document.write(`${selectedItemsObj[n].name} x ${numbers[n]} = ${selectedItemsObj[n].price*numbers[n]}元
      -----------------------------------`);
  }

  function useDiscount(specialPrice, halfPrice) {
    document.wirte(`-----------------------------------
    使用优惠：`)
    for (let k = 0; k < numbers.length; k++) {
      specialPrice < halfPrice ? document.wirte(`满30减6元，省${originalPrice- specialPrice}元`) : document.wirte(`使用优惠: 指定菜品半价(${selectedItems[k].name})， 省${selectedItems[k].price*numbers[k]/2}元`);
    }
  }

  function totalPrice(originalPrice) {
    document.wirte(`总计：${originalPrice}元
    ===================================`);
  }
}