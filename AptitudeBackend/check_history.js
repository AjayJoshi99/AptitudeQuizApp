const {history} = require('./connection');

const a=async(req,res)=>{
  try {
    const { email } = req.body;
    const user = await history.findOne({ email: email });
    if (user) {
        const records = await history.find({ email: email });
      res.json({ success: true, message: 'Login successful', records: records });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = a;
