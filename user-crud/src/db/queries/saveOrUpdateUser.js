const databasePool = require("../client")

module.exports = (request, response) => {
    try {
      const { id, name, gender, email, password, date_birth, telephone, address } = request.body
      if (id) {
        databasePool.query('UPDATE user_account set name = $1, gender = $2, email = $3, password = $4, ' +
        ' date_birth = $5, gender = $6, email = $7, password = $8', 
          [name, gender, email, password, date_birth, telephone, address], (error, results) => {
          if (error) {
            throw error
          }
          return response.status(200).json(results.rows)
        })
      }
      databasePool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
            if (error) {
              throw error
            }
            return response.status(200).json(results.rows)
          })
    } catch (e) {
        console.log("SAVEUSER Exception: " + e);
        return response.status(400).send("Error");
    } 
  }