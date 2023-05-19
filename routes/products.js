const express = require('express') 
let router = express.Router();
const {
  getProduct,
  getBurger,
  getAccompagnement,
  getBoisson,
  getDessert,
  getProductById
} = require('../controller/productsController.js') 

router
  .get('/', getProduct)
  .get('/id/:productId', getProductById)
  .get('/burger', getBurger)
  .get('/accompagnement', getAccompagnement)
  .get('/boisson', getBoisson)
  .get('/dessert', getDessert)

export default router;