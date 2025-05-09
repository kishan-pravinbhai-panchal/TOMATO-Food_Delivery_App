import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js'
import { foodRouter } from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config.js'  
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config

const app = express()
const port = process.env.PORT || 4000

// middlewares

// db connection
connectDb();

app.use(cors());
app.use(express.json())

// api endpoints

app.use('/api/food' , foodRouter)
app.use('/images' , express.static('uploads'))
app.use('/api/user' , userRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)

app.get("/", (req , res) => {
 res.send("API WORKING")
})

app.listen(port , () => {
    console.log(`Server Started on http://localhost:${port}`)
})


