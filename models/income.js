const mongoose = require('./connection.js')

const IncomeSchema = new mongoose.Schema({
    career: String,
    staticOrVariedIncome: Boolean,
    monthlyIncome: Number,
})

const CurrencyCollection = mongoose.model('Income', IncomeSchema)

//getAll

const getAllIncome = () => {
    return CurrencyCollection.find()
}

//getOne

const getOneIncome = (incomeId) => {
    return CurrencyCollection.findById(incomeId)
}

//create

const createIncome = (newIncome) => {
    return CurrencyCollection.create(newIncome)
}

//delete

const deleteIncome = (incomeId) => {
    return CurrencyCollection.delete(incomeId)
}

module.exports = {
    getAllIncome,
    getOneIncome,
    createIncome,
    deleteIncome
}

