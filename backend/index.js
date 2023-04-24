import express from 'express'
import config from './config/envs.js';
import coreRouter from './routers/index.js'
import searchRouter from './routers/search.js'
import bookmarkRouter from './routers/bookmark.js'
import connectToDatabase from './utils/database-connection.js';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend origin
    credentials: true
  }));

app.use('/user', coreRouter)
app.use('/search', searchRouter)
app.use('/bookmark', bookmarkRouter)

connectToDatabase()

app.listen(config.PORT, () => {
    console.log(`Server started on port ${config.PORT}`);
});