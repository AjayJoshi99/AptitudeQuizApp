import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function NonVerbalReasoning(props) {
  const bool = props.prop;
  const x = useNavigate();

  return (
    <div className='text-center'>
      {bool &&
        <div className='h3 border rounded p-3 mb-5 shadow-lg'>Non Verbal Reasoning<br /><br />
          <NavLink to='/Exam/7'><button className="btn btn-warning m-2 exam_button grad e" type="button">Blood Relation - I</button></NavLink><br />
          <NavLink to='/Exam/8'><button className="btn btn-warning m-2 exam_button grad e" type="button">Direction and Sences </button></NavLink><br />
          <NavLink to='/Exam/9'><button className="btn btn-warning m-2 exam_button grad e" type="button">Find the Odd </button></NavLink><br />
          <NavLink to='/Exam/9'><button className="btn btn-warning m-2 exam_button grad e" type="button">Classification </button></NavLink><br />
          <NavLink to='/Exam/10'><button className="btn btn-warning m-2 exam_button grad e" type="button">Verification of Truth </button></NavLink><br />
        </div>
      }
      {
        !bool && x('Login')
      }
    </div>
  )
}

export default NonVerbalReasoning;