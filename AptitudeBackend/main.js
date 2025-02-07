const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Import route files
const login = require('./check_user');
const register = require('./register');
const contactus = require('./contact_us');
const history = require('./history');
const check_history = require('./check_history');



app.use(cors());
app.use(express.json());
app.use(cors({
  origin : [""],
  method : ["POST", "GET"],
  credentials : true}
  ));
// Use route files
app.use('/check_user', login);
app.use('/register', register);
app.use('/contact_us', contactus);
app.use('/history', history);
app.use('/check_history', check_history);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
