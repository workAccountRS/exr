const express = require('express')
const request = require('postman-request')
const app = express()

app.use(express.urlencoded({ extended: false }))


// FIRST ARGUMENT: WHAT URL TO HANDLE FOR A GET REQUEST, SECOND ARGUMENT: CALLBACK FUNCTION
// The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers
// The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
app.get('/', (req,res) => { 
    // SEND A RESPONSE THAT WILL LOAD THE HTML FORM
    // action='/answer' -> WHERE TO SUBMIT THE FORM
    // method='POST' -> THE TYPE OF REQUEST (POST) -> BECAUSE WE ARE SENDING DATA (THE ANSWER)
    res.send(`
    <h1>AAAA  </h1> 
    <form action='/answer' method='POST'>
    <input name='answer'>
    <button> SUBMIT </button>
    </form>
    `)
  
  })


  // WHAT URL TO HANDLE FOR A POST REQUEST (/answer)
app.post('/answer', (req,res) => { 
    // WE SHOULD TELL THE SERVER WHAT TO DO IF SOMEONE POSTED A REQUEST
  
    // DISPLAY HTML CONTENT DEPENDING ON THE ANSWER
  
  
      const lat_long =  (req.body.answer).toString()
      console.log(lat_long) 
      const url = 'http://api.weatherstack.com/current?access_key=3ebe6b1f57c4565c45d79abdb250afe7&query=' + lat_long
  
      
  request({url: url, json: true}, (error, response) => {
      answer = response.body
      console.log()
      res.send(answer.location.country) // RESPONSE WITH THE HTML CONTENT DEPENDING ON THE ANSWER
  
    })
  
  })
  

  
  app.listen(3000, () => {
    console.log('LISTEINING ON PORT 3000')
  }) // LISTEN FOR REQUESTS ON PORT 3000

  
