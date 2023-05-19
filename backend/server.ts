//Imports
const express = require('express');
const dotenv = require('dotenv');
import userRoutes from './routes/userRoutes'
import {notFound, errorHandler} from './middleware/errorMiddleware'

//Initiliez Apps
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();


app.use('/api/users', userRoutes);
app.get( '/', (req: any, res: any) => res.send('server is running') );

app.use(notFound);
app.use(errorHandler);

app.listen( port, () => console.log(`port is : ${port}`) )

export {}