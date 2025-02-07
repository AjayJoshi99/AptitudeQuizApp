import React from 'react'
import './style.css';
import {NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Logical_reasoning(props) {
  const b = props.prop;
  const x = useNavigate();

  return (
    
    <div className='text-center'>
      { b &&
         <div className='h3 border rounded p-3 mb-5 shadow-lg'>Logical Reasoning<br/><br/>
         <NavLink to='/Exam/0'><button className="btn btn-warning m-2 exam_button grad e" type="button">Number Series - I </button></NavLink><br/>
         <NavLink to='/Exam/1'><button className="btn btn-warning m-2 exam_button grad e" type="button">Number Series - II </button></NavLink><br/>
         <NavLink to='/Exam/31'><button className="btn btn-warning m-2 exam_button grad e" type="button">Number Series - III  </button></NavLink><br/>
         <NavLink to='/Exam/11'><button className="btn btn-warning m-2 exam_button grad e" type="button">Letter and Symbol Series </button></NavLink><br/>
         <NavLink to='/Exam/24'><button className="btn btn-warning m-2 exam_button grad e" type="button">Theme Detection </button></NavLink><br/>
         <NavLink to='/Exam/25'><button className="btn btn-warning m-2 exam_button grad e" type="button">Artificial Language </button></NavLink><br/>
         <NavLink to='/Exam/26'><button className="btn btn-warning m-2 exam_button grad e" type="button">Essential Part </button></NavLink><br/>
         <NavLink to='/Exam/27'><button className="btn btn-warning m-2 exam_button grad e" type="button">Verbal Classification </button></NavLink><br/>
         <NavLink to='/Exam/28'><button className="btn btn-warning m-2 exam_button grad e" type="button">Analogies </button></NavLink><br/>

        </div>
        }
        {
          !b && x('Login')
        }
    </div>
    
  )
}

export default Logical_reasoning