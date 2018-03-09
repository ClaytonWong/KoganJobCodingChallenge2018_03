const axios = require('axios')

const kogan = axios.create({
  baseURL: 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/'
})

function getPage(restOfURL) {
  return kogan.get(restOfURL)
}

function getAllPages(restOfURL) {
  kogan.get(restOfURL)
    .then(res => {
      //while(currPage !== null) {
        var page = res.data
        var next = page["next"]
        
        console.log("---restOfURL---")
        console.log(restOfURL)
        
        if(next === null) {
          console.log("Next is null!")
          return true
        }

        return getAllPages(next)
    })
    .catch((error) => {
      console.log('error from .catch in getAllPages definition: ', error)
    })

}

module.exports = { getPage, getAllPages }