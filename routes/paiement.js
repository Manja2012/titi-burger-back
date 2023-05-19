const express = require('express')
let router = express.Router();

const {
  postPaiement,
} = require('../controller/paiementController.js') 

router
  .post('/', postPaiement)

export default router;