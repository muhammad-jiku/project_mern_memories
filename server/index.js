import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', routes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
