const Pool = require('pg').Pool
const config = require('./config')

const databasePool = new Pool(config)

module.exports = databasePool;