const express = require('express')
const fs = require('fs')
const { userInfo } = require('os')
const app = express()


// SET THE VIEW ENGINE TO EJS
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
    // found = dataObject.find(user => user.age > id)
    res.render('user', {id: id, user: dataObject[id]})
 })

  

app.get('*' ,(req,res) => {
    res.send('ERROR!!! PAGE NOT FOUND')
    })


app.listen(8080, () => console.log('LISTENING ON 8080'))