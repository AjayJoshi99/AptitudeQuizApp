const Question = require('./question_connection');

const b =async(req,res)=>{
  try {
    const {e} =req.body;
    console.log(typeof(e))
    console.log(e);
    const user = await Question.findOne({e : e});
    console.log(user.Question)
    if (user) {
        res.send({ success: true, question: user.Question });
    } else {
        res.send({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = b;