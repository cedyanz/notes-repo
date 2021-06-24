const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://test:${password}@ntest.vaurx.mongodb.net/note-app?retryWrites=true&w=majority`

  mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }) 

  .then(() => {
    console.log("connected!!!")
    }).catch((error) => {
    console.log(error)})

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({important: true}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// const connectDB = async () => {
//   try {
//       const conn = await mongoose.connect(process.env.MONGO_URI, {
//           useUnifiedTopology:true, 
//           useNewUrlParser:true, 
//           useCreateIndex:true
//       })
//       console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
//   } catch (error) {
//       console.log(`Error: ${error.message}`.red.underline.bold)
//       process.exit(1)
//   }
// }