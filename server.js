const express =require('express');
const app = express();
const apiRouters = require("/home/user/WebstormProjects/Счетчик трат/back/src/modules/routes/routes");
const bodyParser = require('body-parser');
const  cors =require('cors');

const mongoose = require('mongoose');
const url = 'mongodb+srv://Milena:milena1405@cluster0.qro2s.mongodb.net/userExpenses?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true});

app.use(cors());
app.use(bodyParser.json());//парсит body
app.use(bodyParser.urlencoded({extended:true})); //парсит форму
app.use('/', apiRouters);

app.listen(3012, function () {
    console.log('Сервер запущен');
})
