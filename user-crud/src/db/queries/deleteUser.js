const databasePool = require("../client")

module.exports = (request, response) => {
    try {
      databasePool.query('SELECT * FROM user_account ORDER BY id ASC', (error, results) => {
            if (error) {
              throw error
            }
            return response.status(200).json(results.rows)
          })
    } catch (e) {
        console.log("DELETE_USER Exception: " + e);
        return response.status(400).send("Error");
    } 
  }