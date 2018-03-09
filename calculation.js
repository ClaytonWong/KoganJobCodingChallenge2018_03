const conversionFactor = 250;

// Hard coded test data
var itemLength_cm = 40;
var itemWidth_cm  = 30;
var itemHeight_cm = 20;

function calCubicWeight( itemLength_cm, itemWidth_cm, itemHeight_cm) {
  // Convert item dimensions from centimetres to metres
  var itemLength_M = itemLength_cm / 100;
  var itemWidth_M  = itemWidth_cm  / 100;
  var itemHeight_M = itemHeight_cm / 100;

  /*
  console.log("itemLength_M:", itemLength_M);
  console.log("itemWidth_M:", itemWidth_M);
  console.log("itemHeight_M:", itemHeight_M);
  */

  var itemCubicMetres = itemLength_M * itemWidth_M * itemHeight_M;
  var itemCubicWeight = itemCubicMetres * conversionFactor;

  /*
  console.log("item cubic metres: ", itemCubicMetres);
  console.log("cubic weight in Kg: ", itemCubicWeight);
  */

  return itemCubicWeight;
}

module.exports = { calCubicWeight };

//console.log( `Test item cubic weight: ${calCubicWeight( itemLength_cm, itemWidth_cm, itemHeight_cm)} Kgs `);