//URL-> http://localhost/:8383
//IP ->127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data =['James']



//Middleware
app.use(express.json())

//Type-1 website endpoints
app.get('/', (req, res)=>{
    console.log('User requested the home page website')
    res.send(`
    <body style="background:pink;
    color:blue;">
    <h1>DATA:</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
    </body>
    <script>console.log('This is my script')</script>
    `)
  })
  
  app.get('/dashboard' , (req,res) =>{
      res.send(`
      <body>
      <h1>dashboard</h1>
      <a href="/">Home</a>
      </body>`)
  })
  

//Type-2 API endpoints

//CRUD-method create-post, read-get, update-put and delete-delete

app.get('/api/data', (req,res)=>{
    console.log('This one was for data')
    res.status(599).send(data)
})


app.post('/api/data', (req,res)=>{
    //someone wants to create a user
    //the user clicks the sign up button after enttering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    
    const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req,res)=>{
    data.pop()
    console.log("we deleted the element of the end of the array")
    res.sendStatus(203)
})


app.listen(PORT, ()=> console.log(`Server has started on: ${PORT}`))