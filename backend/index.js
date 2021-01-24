import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import cardRoutes from './routes/cards.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/cards', cardRoutes);

const CONNECTION_URL = process.env.ATLAS_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on: ${PORT}`)))
  .catch((error) =>  console.log(error.message));

mongoose.set('useFindAndModify', false);
