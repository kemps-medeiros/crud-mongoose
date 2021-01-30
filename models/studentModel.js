import mongoose from 'mongoose';

// await mongoose.connect('mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

//conectar ao mongoDB pelo mongoose
// await mongoose.connect("mongodb+srv://kempsmm:kempsdata@bootcamp-fullstack.ldefx.mongodb.net/igti?retryWrites=true&w=majority" , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//criação do modelo
const igtiSchema = mongoose.Schema({
  name : {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true,
    // validate(value) {
    //   if (value < 0)
    //   throw new Error('Valor negativo para a nota não permitido');
    // },
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

//definindo modelo da coleção
// mongoose.model('student', igtiSchema, 'student');

//criando objeto da coleção
// const student = mongoose.model('student');

const studentModel = mongoose.model('student', igtiSchema, 'student');

export {studentModel};