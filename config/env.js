const dotenv = require('dotenv')

dotenv.config();

const ENV = {
    PORT: process.env.PORT
}
module.exports = ENV;