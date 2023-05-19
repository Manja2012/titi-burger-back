const mongoose = require('mongoose')
const { Schema } = mongoose;

const PaiementSchema = new Schema({
    firstName: String, 
    lastName: String,
    email: String,
    payedAmount: mongoose.Decimal128
	
});

const Paiement = mongoose.model('Paiement', PaiementSchema, 'paiement');

module.exports = Paiement