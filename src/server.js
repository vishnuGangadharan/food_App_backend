import express from 'express'
import connectDB from './config/db.js'
import http from 'http';
import dotenv from 'dotenv'
import cors from 'cors'
import morgan  from 'morgan'
import authRouter from './routes/authRoutes.js';


dotenv.config()

const app = express()
const  server = http.createServer(app);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const corsOptions = {
    origin:'http://localhost:5173' ,
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true
  };

  app.use(cors(corsOptions))  
  app.use('/userAuth',authRouter)


  app.get('/', (req, res) => {
    res.send('Hello from the backend!');
  });
  

connectDB()
const PORT = process.env.PORT  | 3000
app.listen(PORT,()=>{
    console.log(`port running on ${PORT}`);
    
})
