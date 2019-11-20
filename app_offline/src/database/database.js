const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'event_offline',
    password: 'george',
    port: 5432,
});

const executeQuery = (query, cb) => {
    console.info('[QUERY]: ', JSON.stringify(query));
    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        cb(results.rows);
    })
};

module.exports = {
    executeQuery
};