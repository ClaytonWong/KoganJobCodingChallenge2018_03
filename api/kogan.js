const axios = require('axios')

const kogan = axios.create({
  baseURL: 'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/'
})

function getPage(x) {
  return kogan.get(x)
}

module.exports = { getPage }