import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const x = useNavigate();
  return (
    <div className="sidebar">
      <div>
        <img src='logo.png' style={{ width: "150px" }} />
      </div>
      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-primary m-2 mt-5 side_button1 h" type="button" onClick={()=>{x("/")}}>Home</button>
        <button className="btn btn-info m-2 side_button2 h" onClick={()=>x('ArithmeticAptitude')} type="button">Arithmetic Aptitude</button>
        <button className="btn btn-info m-2 side_button2 h" onClick={()=>x('Logical_reasoning')} type="button">Logical Reasoning</button>
        <button className="btn btn-info m-2 side_button2 h" onClick={()=>x('VerbalAbility')} type="button">Verbal Aptitude</button>
        <button className="btn btn-info m-2 side_button2 h" onClick={()=>x('NonVerbalReasoning')} type="button">Non Verbal Reasoning</button>
        <button className="btn btn-primary m-2 mt-4 side_button1 h" onClick={()=>x('History')} type="button">History</button>
      </div>
    </div>
  );
};

export default Sidebar;
