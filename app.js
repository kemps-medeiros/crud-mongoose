import express from 'express';
import {studentRouter} from './routes/studentRouter.js';
import mongoose from 'mongoose';

//conectando com o banco de dados
(async () => {
  try {
  await mongoose.connect("mongodb+srv://kempsmm:kempsdata@bootcamp-fullstack.ldefx.mongodb.net/igti?retryWrites=true&w=majority" , {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  });
  console.log('Conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar ao mongoDB' + error);
  }
})();



const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => 
console.log("API iniciada"));