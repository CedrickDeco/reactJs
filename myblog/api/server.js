const express = require('express')
const port = 5000
const dotenv = require('dotenv').config()
const connectDB = require('./dbConfig/db')
const app = express()

// connexion à la base de données
connectDB()

//app.use('/post', require('./routes'))


//Lancer le serveur
app.listen(port, () => console.log('Le serveur a démarré au port ' + port))