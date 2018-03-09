const conversionFactor = 250;

function calCubicWeight(itemLength_cm, itemWidth_cm, itemHeight_cm) {
  // Convert item dimensions from centimetres to metres
  var itemLength_M = itemLength_cm / 100;
  var itemWidth_M  = itemWidth_cm  / 100;
  var itemHeight_M = itemHeight_cm / 100;

  // Calculate cubic metres then cubic weight
  var itemCubicMetres = itemLength_M * itemWidth_M * itemHeight_M;
  var itemCubicWeight = itemCubicMetres * conversionFactor;
  
  return itemCubicWeight;
}

module.exports = { calCubicWeight };