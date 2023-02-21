const express = require("express");
const mongoose = require("mongoose");
const petsRouter = require('./routes/pets');
const port = 3000;

const MONGO_URL = "mongodb+srv://vet-usr:vet-pwd@cluster0.zd7k6.mongodb.net/vet?retryWrites=true&w=majority";
mongoose.connect(MONGO_URL);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/pets', petsRouter );

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}!`);
}) 