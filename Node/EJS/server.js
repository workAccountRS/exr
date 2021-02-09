const express = require('express')
const app = express()
const usersData = require('./users.json')
const fs = require('fs')

app.set('view engine' , 'ejs')

app.get('/' ,(req,res) => {
    res.send(`
    <h1> HOME </h1>
    <form action='/user' method='GET'>
        <input name='id'>
        <button type='submit'> CLICK </button>
    </form>
    `)
})


app.get('/user' ,(req,res) => {
    res.redirect('/user/'+ req.query.id)
 })

 app.get('/user/:id' ,(req,res) => {
    const {id} = req.params    

    data = fs.readFileSync('./users.json').toString()
    dataObject = JSON.parse(data)
    found = dataObject.find(user => user.age > id)
    res.render('user', {id: id, name:'Yaman' , age: 22 , user: found})

   })


app.get('*' ,(req,res) => {
    res.send('ERROR!!! PAGE NOT FOUND')
    })


app.listen(8080, () => console.log('LISTENING ON 8080'))