const express = require('express')
app.use(express.static('build'))
const morgan = require("morgan")
const cors = require('cors')

app.use(cors())

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())


app.use(morgan(' :method :url :status :res[content-length] - :response-time ms '));

app.get('/morgan',(req,res)=> {
  response.end("Morgan Logger App");
})



    let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      },
      {
        "name": "Mark kolp",
        "number": "38-25-645447524",
        "id": 5
      },
    ]
    app.get('/', (request, response) => {
        response.send('<h1>Hello World!</h1>')
      })
      
      app.get('/api/persons/:id', (request, response) => {
        const id = Number(request.params.id)
        const person = persons.find(person => person.id === id)
      
        if (person) {
          response.json(person)
        } else {
          response.status(404).end()
        }
      })


      const generateId = () => {
       const  id= Math.floor(Math.random() * 10000)
      return id
      }

      app.post('/api/persons', (request, response) => {
        // const body = JSON.stringify(request)
        console.log("req",request.body)    

        //  console.log("res",response)

         if (!request.body.name || !request.body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    
    if (persons.find(p => p.name === request.body.name)) {
          return response.status(404).json({
              error: 'name already exists'
          })
      }
        const person = {
          name: request.body.name,
          number: request.body.number,
          id: generateId()
        }
      
        persons = persons.concat(person)
      
        response.json(person)
      })
      

      let info = {
          name: "Phonebook has info for 4",
          date:  new Date(),
      }

      app.get('/info', (request, response) => {
        response.json(info)
      })

      
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)











// const express = require('express')
// const app = express()
// const morgan = require("morgan")

// app.use(morgan(' :method :url :status :res[content-length] - :response-time ms '));

// app.get('/morgan',(req,res)=> {
//   res.end("Morgan Logger App");
// })



//     let persons = [
//       {
//         "name": "Arto Hellas",
//         "number": "040-123456",
//         "id": 1
//       },
//       {
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523",
//         "id": 2
//       },
//       {
//         "name": "Dan Abramov",
//         "number": "12-43-234345",
//         "id": 3
//       },
//       {
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122",
//         "id": 4
//       },
//       {
//         "name": "Mark kolp",
//         "number": "38-25-645447524",
//         "id": 5
//       },
//     ]
//     app.get('/', (request, response) => {
//         response.send('<h1>Hello World!</h1>')
//       })
      
//       app.get('/api/persons/:id', (request, response) => {
//         const id = Number(request.params.id)
//         const person = persons.find(person => person.id === id)
      
//         if (person) {
//           response.json(person)
//         } else {
//           response.status(404).end()
//         }
//       })


//       const generateId = () => {
//         const maxId = persons.length > 0
//         ? Math.max(...persons.map(n => n.id))
//         : 0
//       return maxId + 1
//       }

//       app.post('/api/persons/', (request, response) => {
//         const body = request.body
      
//         if (!body.content) {
//           return response.status(400).json({ 
//             error: 'content missing' 
//           })
//         }
      
//         const person = {
//           content: body.content,
//           important: body.important || false,
//           date: new Date(),
//           id: generateId(),
//         }
      
//         persons = persons.concat(person)
      
//         response.json(person)
//       })
      

//       let info = {
//           name: "Phonebook has info for 4",
//           date:  new Date(),
//       }

//       app.get('/info', (request, response) => {
//         response.json(info)
//       })

      
// app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(person => person.id !== id)
  
//     response.status(204).end()
//   })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)














// const express = require('express')
// const app = express()

//     let persons = [
//       {
//         "name": "Arto Hellas",
//         "number": "040-123456",
//         "id": 1
//       },
//       {
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523",
//         "id": 2
//       },
//       {
//         "name": "Dan Abramov",
//         "number": "12-43-234345",
//         "id": 3
//       },
//       {
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122",
//         "id": 4
//       },
//     ]
//     app.get('/', (request, response) => {
//         response.send('<h1>Hello World!</h1>')
//       })
      
//       app.get('/api/persons/:id', (request, response) => {
//         const id = Number(request.params.id)
//         const person = persons.find(person => person.id === id)
      
//         if (person) {
//           response.json(person)
//         } else {
//           response.status(404).end()
//         }
//       })


//       const generateId = () => {
//         const maxRandom = persons.length > 0
//           ? Math.random(...persons.map(n => n.id))
//           : 0
//         return Math.floor(Math.random() * Math.floor(persons.id));
//       }

//       app.post('/api/persons', (request, response) => {
//         const body = request.body
      
//         if (!body.content) {
//           return response.status(400).json({ 
//             error: 'content missing' 
//           })
//         }
      
//         const person = {
//           content: body.content,
//           important: body.important || false,
//           date: new Date(),
//           id: generateId(),
//         }
      
//         persons = persons.concat(person)
      
//         response.json(person)
//       })
      

//       let info = {
//           name: "Phonebook has info for 4",
//           date:  new Date(),
//       }

//       app.get('/info', (request, response) => {
//         response.json(info)
//       })

      
// app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(person => person.id !== id)
  
//     response.status(204).end()
//   })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)