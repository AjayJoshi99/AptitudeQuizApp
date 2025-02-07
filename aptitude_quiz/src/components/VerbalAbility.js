import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function VerbalAbility(props) {
  const bool = props.prop;
  const x = useNavigate();

  return (
    <div className='text-center'>
      {bool &&
        <div className='h3 border rounded p-3 mb-5 shadow-lg'>Verbal Ability<br /><br />
          <NavLink to='/Exam/3'><button className="btn btn-warning m-2 exam_button grad e" type="button">Selecting Words</button></NavLink><br />
          <NavLink to='/Exam/4'><button className="btn btn-warning m-2 exam_button grad e" type="button">One Word Substitutes </button></NavLink><br />
          <NavLink to='/Exam/5'><button className="btn btn-warning m-2 exam_button grad e" type="button">Spellings </button></NavLink><br />
          <NavLink to='/Exam/6'><button className="btn btn-warning m-2 exam_button grad e" type="button">Sentence Formation </button></NavLink><br />
          <NavLink to='/Exam/22'><button className="btn btn-warning m-2 exam_button grad e" type="button">Synonyms </button></NavLink><br />
          <NavLink to='/Exam/23'><button className="btn btn-warning m-2 exam_button grad e" type="button">Sentence Improvement </button></NavLink><br />
          <NavLink to='/Exam/29'><button className="btn btn-warning m-2 exam_button grad e" type="button">Spotting Errors </button></NavLink><br />
          <NavLink to='/Exam/30'><button className="btn btn-warning m-2 exam_button grad e" type="button">Verbal Analogies </button></NavLink><br />
          <NavLink to='/Exam/32'><button className="btn btn-warning m-2 exam_button grad e" type="button">Antonyms </button></NavLink><br />
        </div>
      }
      {
        !bool && x('Login')
      }

    </div>
  )
}

export default VerbalAbility;
