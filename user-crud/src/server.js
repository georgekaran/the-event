const app = require('./app')

const nodePort = process.env.NODE_PORT || 5001

app.listen(nodePort, () => {
    console.log(`User-crud is up on port ${nodePort}`)
})