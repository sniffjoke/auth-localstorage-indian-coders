import express from 'express'
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', router)
app.use('/api/blog', blogRouter)

mongoose.connect('mongodb+srv://nalcapital:sZRB1KJHUJqTrFg8@cluster0.ggcw4.mongodb.net/indicodersauthlocalst?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() => console.log('Connected to Database and Listening to Localhost 5000'))
    .catch((err) => console.log(err))
