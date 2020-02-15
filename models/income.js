const mongoose = require('./connection.js')

const IncomeSchema = new mongoose.Schema({
    career: String,
    staticOrVariedIncome: String,
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
    return CurrencyCollection.delete({_id: incomeId})
}

module.exports = {
    getAllIncome,
    getOneIncome,
    createIncome,
    deleteIncome
}

