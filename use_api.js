//import { calCubicWeight } from 'calculation'
let calculation = require('./calculation')
const kogan = require('./api/kogan')
const startPoint = 'api/products/1'

var currPage = startPoint // Initialise current page at starting point

let airConRelArr = [] // Array for storing products in air conditioners category
let cubicWeights = []

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

/*
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
    
    for(i = 0; i < airConRelArr.length; i++) {
      // Calculate cubic weight weight of 
      // each item in air conditioners category
      console.log(airConRelArr[i].title)

      var length = airConRelArr[i]["size"]["length"]
      var width = airConRelArr[i]["size"]["width"]
      var height = airConRelArr[i]["size"]["height"]
      var cubicWeight = calculation.calCubicWeight(length, width, height)

      console.log(`Cubic weight: ${cubicWeight} Kg`)
      console.log()
      
      // Add cubic weight of current item to collection of cubic weights
      cubicWeights.push(cubicWeight) 
    }

    //------------------------------------------------------------------
    //  Find average cubic weight of items in Air Conditioners category
    //------------------------------------------------------------------
    // First, find total of cubic weight for all items in category first
    var cubicWeightTotal = 0 // Initialse total at 0
    cubicWeights.forEach((weight) => {             // Get running total
      cubicWeightTotal = cubicWeightTotal + weight // of cubic weights
    })

    // Divide total cubic weight by number of items in category to find average
    var averageCubicWeight = cubicWeightTotal / cubicWeights.length
    console.log(`Average cubic weight of all air conditioning related items: ${averageCubicWeight} kg`)
  })
  .catch((error) => {
    console.log('error from .catch in getSomething definition: ', error)
  })
*/
  