//import { calCubicWeight } from 'calculation'
let calculation = require('./calculation')
const kogan = require('./api/kogan')
const startPoint = 'api/products/1'

var currPage = startPoint // Initialise current page at starting point

let airConRelArr = [] // Array for storing products in air conditioners category

//while (currPage !== null) {
    //var next = []
/*   kogan.getPage(currPage)
    .then(res => {
      //while(currPage !== null) {
        var page = res.data
        var next = page["next"]
        console.log("---currPage---")
        console.log(currPage)
        currPage = next
        
        kogan.getPage(currPage)
        .then(res => {
          //while(currPage !== null) {
            var page = res.data
            var next = page["next"]
            console.log("---currPage---")
            console.log(currPage)
            currPage = next
            
          //}
        })
        .catch((error) => {
          console.log('error from .catch in getSomething definition: ', error)
        })

      //}
    })
    .catch((error) => {
      console.log('error from .catch in getSomething definition: ', error)
    }) */
  //currPage = next // Goto next page
//}

kogan.getPage(startPoint)
  .then(res => {
    var page = res.data
    var currPageProducts = page["objects"]
        
    for(i = 0; i < currPageProducts.length; i++) {
      // If current product is in air conditioners category,
      // add it to "air con related product array"
      if (currPageProducts[i]["category"] === 'Air Conditioners') {
        airConRelArr.push(currPageProducts[i])
      }
    }
    /*
    console.log("---airConRelArr---")
    console.log(airConRelArr)
    */

    for(i = 0; i < airConRelArr.length; i++) {
    // 
    // 
      console.log(airConRelArr[i].title)

      var length = airConRelArr[i]["size"]["length"]
      var width = airConRelArr[i]["size"]["width"]
      var height = airConRelArr[i]["size"]["height"]

      console.log(`Cubic weight: ${calculation.calCubicWeight(length, width, height)} Kg`)
      console.log()
    }

    /*
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

  