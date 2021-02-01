import {config} from 'dotenv';

import express from 'express';
import {studentRouter} from './routes/studentRouter.js';
import mongoose from 'mongoose';

//config().parsed['PORT', 'USERDB', 'PWDDB'];
config();
//utilizando o dotenv


//conectando com o banco de dados
(async () => {
  try {
  await mongoose.connect("mongodb+srv://" + process.env.USERDB + ":" + process.env.PWDDB + "@bootcamp-fullstack.ldefx.mongodb.net/igti?retryWrites=true&w=majority" , {
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

app.listen(process.env.PORT, () => 
console.log(`API iniciada...Na porta ${process.env.PORT}`)
);