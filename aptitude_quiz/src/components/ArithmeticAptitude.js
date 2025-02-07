import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function ArithmeticAptitude(props) {
    const bool = props.prop;
    const x = useNavigate();
  
    return (
        <div className='text-center'>
            {bool &&
            <div className='h3 border rounded p-3 mb-5 shadow-lg'>Arithmetic Aptitude <br /><br />
                <NavLink to='/Exam/12'><button className="btn btn-warning m-2 exam_button grad e" type="button">Calander </button></NavLink><br />
                <NavLink to='/Exam/13'><button className="btn btn-warning m-2 exam_button grad e" type="button">Clock </button></NavLink><br />
                <NavLink to='/Exam/14'><button className="btn btn-warning m-2 exam_button grad e" type="button">Time and Distance </button></NavLink><br />
                <NavLink to='/Exam/15'><button className="btn btn-warning m-2 exam_button grad e" type="button">Area </button></NavLink><br />
                <NavLink to='/Exam/16'><button className="btn btn-warning m-2 exam_button grad e" type="button">Simple interest </button></NavLink><br />
                <NavLink to='/Exam/17'><button className="btn btn-warning m-2 exam_button grad e" type="button">Problems on Numbers </button></NavLink><br />
                <NavLink to='/Exam/18'><button className="btn btn-warning m-2 exam_button grad e" type="button">Odd Man Out and Series</button></NavLink><br />
                <NavLink to='/Exam/19'><button className="btn btn-warning m-2 exam_button grad e" type="button">Problems on Trains </button></NavLink><br />
                <NavLink to='/Exam/20'><button className="btn btn-warning m-2 exam_button grad e" type="button">Problems on H.C.F and L.C.M </button></NavLink><br />
                <NavLink to='/Exam/21'><button className="btn btn-warning m-2 exam_button grad e" type="button">Simplification </button></NavLink><br />

            </div>
             }
             {
               !bool && x('Login')
             }
        </div>
    )
}

export default ArithmeticAptitude