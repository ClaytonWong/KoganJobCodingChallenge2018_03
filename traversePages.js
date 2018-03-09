const kogan = require('./api/kogan')
const startPoint = 'api/products/1'

let calculation = require('./calculation')
let airConRelArr = [] // Array for storing products in air conditioners category
let cubicWeights = [] // Array for storing collection of cubic weights

function traversePages(startPoint) {
  kogan.getPage(startPoint)
    .then(res => {
        var page = res.data
        var next = page["next"] // Get part of URL for next page
        
        console.log("---startPoint---")
        console.log(startPoint)

        var currPageProducts = page["objects"] // Get products on current page
        
        // Go through products on current page one by one
        for(i = 0; i < currPageProducts.length; i++) { 
          // If current product is in air conditioners category,
          // add it to "air con related product array"
          if (currPageProducts[i]["category"] === 'Air Conditioners') {
            airConRelArr.push(currPageProducts[i])
            console.log("Item pushed")
          }
        }
        console.log("") // Print blank line on screen
        
        if(next === null) { // If we have reached last page
          console.log("Next is null!")
          console.log("") // Print blank line on screen

          console.log("We have reached the last page.")
          console.log("") // Print blank line on screen
          console.log("List of air con related items and cubic weights: ")
          console.log("------------------------------------------------")

          for(i = 0; i < airConRelArr.length; i++) {
            // Calculate cubic weight of 
            // each item in air conditioners category
            console.log(airConRelArr[i].title)
      
            var length = airConRelArr[i]["size"]["length"]
            var width = airConRelArr[i]["size"]["width"]
            var height = airConRelArr[i]["size"]["height"]
            var cubicWeight = calculation.calCubicWeight(length, width, height)
      
            console.log(`Cubic weight: ${cubicWeight} Kg`)
            console.log("")
            
            // Add cubic weight of current item to collection of cubic weights
            cubicWeights.push(cubicWeight) 
          }

          //------------------------------------------------------------------
          //  Find average cubic weight of items in Air Conditioners category
          //------------------------------------------------------------------
          // First, find total of cubic weight for all items in category first
          var cubicWeightTotal = 0 // Initialise total at 0
          cubicWeights.forEach((weight) => {             // Get running total
            cubicWeightTotal = cubicWeightTotal + weight // of cubic weights
          })

          // Divide total cubic weight by number of items in category to find average
          var averageCubicWeight = cubicWeightTotal / cubicWeights.length
          console.log(`Total cubic weight of all air con related items (cubicWeightTota): ${cubicWeightTotal} Kg`)
          console.log(`Number of air con related products (cubicWeights.length): ${cubicWeights.length}`)
          console.log("")
          console.log(`Average cubic weight of all air conditioning related items: ${averageCubicWeight} kg`)

          // Return true to avoid printing error messages to screen,
          // you have also reached the "base case" of recursion
          return true 
        }

        // Get traversePage function to call itself (ie. recursion)
        // but this time, use part of URL for next page as parameter
        return traversePages(next) 
    })
    .catch((error) => {
      console.log('error from .catch in traversePages definition: ', error)
    })
}

traversePages(startPoint)
  