//tasking
//1.get selected items'array,including id/name/price,just like[{id/name/price},{id/name/price}];
//2.get special items'array and common items'array,just like[{id/name/price},{id/name/price}];
//3.use countPrice function to get several price;
//4.orderItemsList/useDiscount/totalPrice;
//5.output
function getSelectedItems(selectedItems) {
  let selectedItemsId = [];
  selectedItemsId.push(selectedItems[i].split(" x ")[0]);
  var selectedItemsArray = [];
  selectedItemsArray.push(allItems.filter(x => selectedItemsId.includes(x.id)));
  return selectedItemsArray;
}

function getItems(specialIdArray) {
  return selectedItemsArray.filter(x => specialIdArray.includes(x.id));
}

function countPrice(arrays) {
  return arrays.reduce((x, y) => x.price + y.price);
}

function bestCharge(selectedItems) {
  var numbers = [];
  var originalPrice = 0,
    specialPrice = 0,
    halfPrice = 0;
  numbers.push(selectedItems[i].split(" x ")[1]);
  var halfItems = getItems(['ITEM0001', 'ITEM0022']);
  var otherItems = getItems(['ITEM0013', 'ITEM0030']);
  halfPrice = countPrice(halfItems) / 2 + countPrice(otherItems);
  originalPrice = countPrice(selectedItemsArray);
  specialPrice = origi1nalPrice - Math.floor(originalPrice % 30) * 6;
  orderItemsList(selectedItemsArray, number);
  useDiscount(specialPrice, halfPrice);
  totalPrice(originalPrice);
}

function orderItemsList(selectedItemsArray, number) {
  document.write(`============= 订餐明细 =============`);
  for (let n = 0; n < numbers.length; n++) {
    document.write(`${selectedItemsArray[n].name} x ${number[n]} = ${selectedItemsArray[n].price} * ${numbers[n]}元
      -----------------------------------`);
  }

  function useDiscount(specialPrice, halfPrice) {
    document.wirte(`-----------------------------------
    使用优惠：`)
    for (let k = 0; k < numbers.length; k++) {
      specialPrice < halfPrice ? document.wirte(`满30减6元，省${originalPrice}- ${specialPrice}元`) : document.wirte(`使用优惠: 指定菜品半价(${halfItems[k].name})， 省${originalPrice}-${halfPrice}元`);
    }
  }

  function totalPrice(originalPrice) {
    document.wirte(`总计：${originalPrice}元
    ===================================`);
  }
}