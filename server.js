require('dotenv').config({path:'config.env'})   // chemin du config.env pour la route vers mongoDB

const express =require('express')  // variable express
const routes = require('./route')
const  mongoConnect = require('./connect')

const PORT = process.env.PORT

const app = express()                  // méthode express
app.use(express.json())
app.use('/', routes)

mongoConnect()

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
