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