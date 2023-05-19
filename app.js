const express = require("express") 
const cors = require("cors") 
const mongoose = require('mongoose') 
const products = require('./routes/products.js') 
const paiement = require('./routes/paiement.js') 
const bodyParser = require('body-parser') 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mdemko2012:Masha2012@titi-burger.vvhog8a.mongodb.net/titi-burger?retryWrites=true&w=majority');
}
//const
const app = express()

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//path url
//routes
app.use('/api/products', products)
app.use('/api/paiement', paiement)

export default app;