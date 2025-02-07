const {history} = require('./connection');

const a=async(req,res)=>{
  try {
    const { email, examNumber, answerObj, totalMarks } = req.body;
    const user = await history.insertMany({ email: email, examNumber: examNumber, answerObj:answerObj, totalMarks:totalMarks  });
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = a;
