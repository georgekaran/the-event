const config = {
    host: process.env.PGHOST, //
    user: process.env.PGUSER, // default process.env.PGUSER || process.env.USER
    password: process.env.PGPASSWORD, //default process.env.PGPASSWORD
    database: process.env.PGDATABASE, // default process.env.PGDATABASE || process.env.USER
    port: process.env.PGPORT || 5432, // default process.env.PGPORT
  }

module.exports = config;