import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mailRoute from './routes/mailRoute.js'
import connectDb from './config/db.js'
import adminRoute from './routes/adminRoute.js'

const app = express()

//middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())

connectDb()


app.use('/',mailRoute)
app.use('/',adminRoute)


const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}` )
})