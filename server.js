const express =require('express');
const app = express();
//const apiRouters = require("/home/user/WebstormProjects/Счетчик трат/back/src/modules/routes/routes");
const bodyParser = require('body-parser');
const  cors =require('cors');

const mongoose = require('mongoose');
const url = 'mongodb+srv://Milena:milena1405@cluster0.qro2s.mongodb.net/userExpenses?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true});

app.use(cors());
app.use(bodyParser.json());//парсит body
app.use(bodyParser.urlencoded({extended:true})); //парсит форму
//app.use('/', apiRouters);


/*const  Schema = mongoose.Schema;
let ExpenseSchema = new Schema({
    where: String,
    when: String,
    howMuch: Number
});
const  Expense = mongoose.model('Expense', ExpenseSchema);


const Schema2 = mongoose.Schema;
let UserSchema = new Schema2({
    fullName: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema);

app.post ('/createUser', function (req, res){
    const user = new User ({
        fullName:req.body.fullName,
        email : req.body.email,
        password : req.body.password
    });
    user.save().then(result => {
        res.send(result)
    }).catch(err =>{
        return res.sendStatus(500);
        console.log(err)
    })
})

app.post('/create', function (req, res) {
    let date = new Date();
    let when = date.getDate()+'.'+( date.getMonth()+1)+'.'+ date.getFullYear();
    const expense = new Expense({
        where: req.body.where,
        when: when,
        howMuch: req.body.howMuch
    });
    expense.save().then(result => {
        res.send(result)

    }) .catch(err => {
        return res.sendStatus(500);
        console.log(err);
    })

})
app.get('/all', function (req,res){
    Expense.find().then(result =>{
        res.send(result)
        })
        .catch (err =>{
        return res.sendStatus(500);
        console.log(err);
    });
    });


app.put('/update/:id', function (req,res) {
    Expense.findOneAndUpdate({_id : req.params.id}, {where: req.body.where, howMuch:req.body.howMuch}).then(result => {
        res.send('Success updated')
    })
        .catch(err => {
            console.log(err);
            return res.sendStatus(500);
        })
})


app.delete('/delete/:id', function (req, res) {
    Expense.deleteOne({_id : req.params.id}).then(result => {
        res.send('Success deleted')

    }).catch(err => {
        console.log(err)
        return res.sendStatus(500);
    })
})
*/
app.listen(3012, function () {
    console.log('Сервер запущен');
})
