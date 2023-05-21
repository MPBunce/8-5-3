//Imports
const express = require('express');
const dotenv = require('dotenv');
import userRoutes from './routes/userRoutes'
import {notFound, errorHandler} from './middleware/errorMiddleware'
import connectDB from './config/db';

//Initiliez Apps
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users', userRoutes);
app.get( '/', (req: any, res: any) => res.send('server is running') );

app.use(notFound);
app.use(errorHandler);

app.listen( port, () => console.log(`port is : ${port}`) )

export {}