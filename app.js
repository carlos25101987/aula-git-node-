const express = require('express')
const cors = require('cors')
const router = require('./routs/alunoRouts')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/alunos', router)
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
