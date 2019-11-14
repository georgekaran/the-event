const config = {
    host: process.env.PGHOST || 'localhost', //
    user: process.env.PGUSER || 'postgres', // default process.env.PGUSER || process.env.USER
    password: process.env.PGPASSWORD || 'postgres', //default process.env.PGPASSWORD
    database: process.env.PGDATABASE || 'the_event', // default process.env.PGDATABASE || process.env.USER
    port: process.env.PGPORT || 5432, // default process.env.PGPORT
  }

module.exports = config;