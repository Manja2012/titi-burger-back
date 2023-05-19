const app = require('./app.js') 
const {ENV} = require('./config/env.js') 

//port
const PORT = ENV.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})

