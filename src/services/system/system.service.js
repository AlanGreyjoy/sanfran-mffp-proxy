/**
 * Get the health status of the service
 * @returns
 */
module.exports.healthCheck = async () => {
  return { status: 'UP' }
}
