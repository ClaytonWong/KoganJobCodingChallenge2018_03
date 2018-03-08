const kogan = require('./api/kogan')

kogan.getSomething('products/1')
  .then(res => {
    const stuff = res.data
    console.log(stuff)
    //console.log(`Found ${stuff.length} things from kogan:`)
    //stuff.forEach(thing => {
    //  console.log(`${thing.name}`)
    //})
  })
  .catch((error) => {
    console.log('error from .catch in getSomething definition: ', error)
  })