const app = require('./app.js') 


//port
const PORT = 8080;

//listen
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
})

