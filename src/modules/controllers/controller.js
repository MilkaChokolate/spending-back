const  Task = require("/home/user/WebstormProjects/Счетчик трат/back/src/database/shema");
/*const {Schema} = require("mongoose");
const express =require('express');
const app = express();*/

module.exports.createNew = (req, res) => {
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
}
module.exports.getAll = (req, res) =>{
    Expense.find().then(result =>{
        res.send(result)
        })
        .catch (err =>{
            return res.sendStatus(500);
            console.log(err);
        });
}


module.exports.updateInfo = (req, res) => {
    Expense.findOneAndUpdate({_id : req.params.id}, {where: req.body.where, howMuch:req.body.howMuch}).then(result => {
        res.send('Success updated');
    })
        .catch(err => {
            console.log(err);
            return res.sendStatus(500);
        })
}


module.exports.deleteInfo = (req, res) => {
    Expense.deleteOne({_id : req.params.id}).then(result => {
        res.send('Success deleted');
    })
        .catch(err => {
            console.log(err);
            return res.sendStatus(500);
        })
}

