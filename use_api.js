const kogan = require('./api/kogan')

kogan.getSomething('products/1')
  .then(res => {
    var stuff = res.data
    console.log("--stuff---")
    console.log(stuff)
    //console.log(`Found ${stuff.length} things from kogan:`)
    //stuff.forEach(thing => {
    //  console.log(`${thing.name}`)
    //})
    
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
  })
  .catch((error) => {
    console.log('error from .catch in getSomething definition: ', error)
  })