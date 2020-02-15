const express = require('express')
const app = express()

// const { currencyRouter } = require('./controllers/currency.js')
// const { expenseRouter } = require('./controllers/expense.js')



app.use(express.urlencoded({extended: true}))


app.use(express.json())



app.use(express.static(`${__dirname}/client/build`))



// app.use('/api/currency', currencyRouter)
// app.use('/api/expense', expenseRouter)



app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})