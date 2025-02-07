const mongoose = require('mongoose');

//database_admin_password : e5Ic87DFBu8HueKZ

// mongoose.connect('mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('Database connected!'))
// .catch(error => {
//   console.error('Database connection error:', error.message);
//   console.error(error.stack);
//   process.exit(1); // Exit the process with failure
// });
//Atlas
mongoose.connect('mongodb+srv://ajayjoshi1908:e5Ic87DFBu8HueKZ@users.zhlpevb.mongodb.net/aptitude_app_user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'))
.catch(error => {
  console.error('Database connection error:', error.message);
  console.error(error.stack);
  process.exit(1); // Exit the process with failure
});

const loginSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String,
});
const contactUsSchema = new mongoose.Schema({
  name : String,
  email: String,
  msg: String
});

const historyExam = new mongoose.Schema({
  email: String,
  examNumber : Intl,
  answerObj : Object,
  totalMarks:Intl
});

// Create a model for the Login collection
const Login = mongoose.model('Login', loginSchema, 'Login');
const contactUs = mongoose.model('contact_us', contactUsSchema);
const history = mongoose.model('history', historyExam);

/*  -->   Here if we want to use Collection with first char in capital we have to specify third argument
as same name .
    -->   If name is in lower we dont have to specify third argument.
*/
module.exports = {Login, contactUs, history};