import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';


function AboutUs(props) {
  const bool = props.prop;
  const x = useNavigate();

  return (
    <div className="container">
      {bool &&
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="text-center">About Us</h1>
          <p className="text-center">
            Welcome to our Aptitude Quiz App! We are passionate about helping you improve your aptitude skills and excel in your career.
          </p>
          <p className="text-center">
            Our Aptitude Quiz App is designed to provide a comprehensive platform for practicing aptitude tests. Whether you're preparing for job interviews, entrance exams, or simply want to sharpen your skills, our app offers a wide range of questions and topics to help you succeed.
          </p>
          <p className="text-center">
            With a user-friendly interface and customizable quizzes, you can tailor your practice sessions to focus on specific areas of interest. Track your progress over time and identify areas for improvement to boost your confidence and performance.
          </p>
          <div className="team-members d-grid ">
            <div className="member mb-5">
              <img src="devloper.jpg" alt="Member 1" />
              <h3>Ajay Joshi</h3>
              <p>Lead Developer</p><br/>
              <p><h5>Email : </h5> ajayjoshi1908@gmail.com</p>
            </div>
            <div className="member mb-5">
              <img src="devloper.jpg" alt="Member 2" />
              <h3>Ajay Joshi</h3>
              <p>Designer</p>
            </div>
            <div className="member">
              <img src="devloper.jpg" alt="Member 3" />
              <h3>Ajay Joshi</h3>
              <p>Content Writer</p>
            </div>
          </div>
        </div>
      </div>
       }
       {
         !bool && x('Login')
       }
    </div>
  );
}

export default AboutUs;
