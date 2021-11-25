const mongoose = require('mongoose');

const {Schema} = mongoose;

const ExpenseSchema = new Schema({
    where: String,
    when: String,
    howMuch: Number
});
module.exports = Expense = mongoose.model('Expense', ExpenseSchema);