const express = require('express')

// The app object contains methods for
 // - Routing HTTP requests
 // - Configuring middleware; 
 // - Rendering HTML views
const app = express() // Creates an Express application

app.use(express.urlencoded({ extended: false })) // ENABLE USER INPUTS FROM POST REQUESTS

// FIRST ARGUMENT: WHAT URL TO HANDLE FOR A GET REQUEST, SECOND ARGUMENT: CALLBACK FUNCTION
// The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers
// The res object represents the HTTP response that an Express app sends when it gets an HTTP request.
app.get('/', (req,res) => { 
  // SEND A RESPONSE THAT WILL LOAD THE HTML FORM

  // action='/answer' -> WHERE TO SUBMIT THE FORM
  // method='POST' -> THE TYPE OF REQUEST (POST) -> BECAUSE WE ARE SENDING DATA (THE ANSWER)
  res.send(`
  <h1> 2 + 2 =  </h1> 
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
  if (req.body.answer == 4) {
    answer = `<h1>RIGHT ANSWER = ${req.body.answer}  </h1> ` }
  else if (req.body.answer.toUpperCase() == 'FOUR') {
    answer = `<h1>RIGHT ANSWER: ${req.body.answer}  </h1> ` }
  else{
    answer = `<h1> WRONG ANSWER: ${req.body.answer}  </h1> `
  }

  res.send(answer) // RESPONSE WITH THE HTML CONTENT DEPENDING ON THE ANSWER

})


app.listen(3000) // LISTEN FOR REQUESTS ON PORT 3000

