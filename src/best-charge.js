//tasking
//1.get price and count
//2.compare
//3.output
function bestCharge(selectedItems) {
  var originalPrice = 0;
  var specialPrice = 0;
  var halfPrice = 0;
  var temp = 0;
  var allItems = loadAllItems;
  var allPromotions = loadPromotions;
  for (let i = 0; i < selectedItems.length; i++) {
    let items = selectedItems[i].split(" x ")[0];
    let numbers = selectedItems[i].split(" x ")[1];
    for (let j = 0; j < allItems.length; j++) {
      if (allItems[j].id = items && items != 'ITEM0001' || 'ITEM0022') {
        originalPrice += allItems[j].price * numbers;
      } else if (items == 'ITEM0001' || 'ITEM0022') {
        halfPrice += allItems[j].price / 2 * numbers;
      }
    }
    temp = originalPrice;
    originalPrice += halfPrice * 2;
    halfPrice += temp;
    specialPrice = originalPrice - Math.floor(originalPrice % 30) * 6;
    if (halfPrice > specialPrice) {
      return specialPrice;
    } else {
      return halfPrice;
    }
  }
}