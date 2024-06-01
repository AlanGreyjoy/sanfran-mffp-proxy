const axios = require('axios')

const client = axios.create({
  baseURL: 'https://data.sfgov.org/api/id/rqzj-sfat.json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

module.exports.getFoodTrucks = async params => {}
