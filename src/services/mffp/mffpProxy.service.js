const axios = require('axios')
const logger = require('../../utils/logger')

const client = axios.create({
  baseURL: 'https://data.sfgov.org/api/id/rqzj-sfat.json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

/**
 * Get all food trucks
 * @param {*} params
 * @returns
 */
module.exports.getFoodTrucks = async params => {
  let query = 'SELECT *, :id '

  let queryClauses = []

  if (params.where) {
    queryClauses.push(`WHERE ${params.where}`)
  }

  if (params.order) {
    queryClauses.push(`ORDER BY ${params.order}`)
  } else {
    queryClauses.push(`ORDER BY applicant`)
  }

  if (params.limit) {
    queryClauses.push(`LIMIT ${params.limit}`)
  } else {
    queryClauses.push(`LIMIT 10`)
  }

  if (params.offset) {
    queryClauses.push(`OFFSET ${params.offset}`)
  } else {
    queryClauses.push(`OFFSET 0`)
  }

  if (queryClauses.length > 0) {
    query += ' ' + queryClauses.join(' ')
  }

  logger.info(`Querying MFFP with query: ${query}`)

  client.defaults.params = {
    $query: query
  }

  const response = await client.get('')

  return response.data
}
