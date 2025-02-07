import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import data from './ExamData.json';

const History = (props) => {
  const [obj, setObj] = useState(null);
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showHistory, setShowHistory] = useState(false);
  
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/check_history', {
          email: user ? user.email : "unknown",
        });
        if (response.data.success) {
          setRecords(response.data.records);
        } else {
          console.error('Invalid credentials:', response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleExamClick = (record) => {
    const foundExam = data.find(exam => exam.e === record.examNumber);
    setObj(foundExam);
    setSelectedRecord(record);
    setShowHistory(true);
  };

  const handleBackClick = () => {
    setShowHistory(false);
    setSelectedRecord(null);
    setObj(null);
  };

  return (
    <div>
      <h3>Your history: {user?.email}</h3>
      <center>
        {!showHistory && (
          <div>
            {records.map((record, index) => (
              <div key={index}>
                <button className="btn btn-warning m-2 exam_button grad e" type="button" onClick={() => handleExamClick(record)}>
                  Exam - {index + 1}<br/>
                  <span style={{ fontSize: '14px' }}>Total marks - 10 | Marks Obtained - {record.totalMarks}</span>
                <br/><br/><br/>
                </button>
                <br />
              </div>
            ))}
          </div>
        )}
      </center>
      {showHistory && selectedRecord && (
        <div>
          <div className='text-center'>
            <h2 className='mx-auto'>Quiz Results</h2>
            <h3>Total Marks: {selectedRecord.totalMarks}</h3>
          </div>
          {obj?.Question?.map((que, index) => (
            <div className="card border rounded m-3 p-2 shadow-lg" key={index}>
              {selectedRecord.answerObj[index] === que[5] ? (
                <h3 style={{ color: 'green' }}>Correct</h3>
              ) : (
                <h3 style={{ color: 'red' }}>Incorrect</h3>
              )}
              <p className="card-text"><span className='h5'>Question {index + 1} : </span>{que[0]}</p>
              <div>
                <div>A. {que[1]}</div>
                <div>B. {que[2]}</div>
                <div>C. {que[3]}</div>
                <div>D. {que[4]}</div>
              </div>
              <div>Your Answer: {selectedRecord.answerObj[index]}</div>
              <div>Correct Answer: {que[5]}</div>
            </div>
          ))}
          <center>
            <button className="btn btn-primary mt-3" onClick={handleBackClick}>Back</button>
          </center>
        </div>
      )}
    </div>
  );
};

export default History;
