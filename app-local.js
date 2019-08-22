const app = require('./app');
//const logger = require('./helper/logger')
const port = 4009

app.listen(port)
console.log(`listening on http://localhost:${port}`)