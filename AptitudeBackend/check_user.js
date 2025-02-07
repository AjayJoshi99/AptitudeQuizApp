const {Login} = require('./connection');

const a=async(req,res)=>{
  try {
    const { email, password } = req.body;
    const user = await Login.findOne({ email: email, password: password });
    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = a;
