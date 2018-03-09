const kogan = require('./api/kogan')
const startPoint = 'api/products/1'

let airConRelArr = [] // Array for storing products in air conditioners category

kogan.getPage(startPoint)
  .then(res => {
    var page = res.data
    var currPageProducts = page["objects"]
        
    for(i = 0; i < currPageProducts.length; i++) {
      // If current product is in air conditioners category,
      // add it to "air con related product array"
      if (currPageProducts[i]["category"] == 'Air Conditioners') {
        airConRelArr.push(currPageProducts[i])
      }
    }

    console.log("---airConRelArr---")
    console.log(airConRelArr)

    /*
    var oneThing = stuff["objects"][0]
    console.log("---oneThing---")
    console.log(oneThing)

    var oneThingCategory = stuff["objects"][0]["category"]
    console.log("---oneThingCategory---")
    console.log(oneThingCategory)

    var oneThingCategorySize = stuff["objects"][0]["size"]
    console.log("---oneThingCategorySize---")
    console.log(oneThingCategorySize)

    var oneThingCategorySizeWidth = stuff["objects"][0]["size"]["width"]
    console.log("---oneThingCategorySizeWidth---")
    console.log(oneThingCategorySizeWidth)
    */
  })
  .catch((error) => {
    console.log('error from .catch in getSomething definition: ', error)
  })

  