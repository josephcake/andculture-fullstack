import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const env = dotenv.config()
const app = express()
const port  = process.env.port || 9001

app.use(cors())
app.use(express.json())
app.listen(port, ()=>{
  console.log(`server is running on port: ${port}`);
})
