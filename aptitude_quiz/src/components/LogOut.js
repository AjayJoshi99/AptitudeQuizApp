import React from 'react';
import './style.css';

const LogOut = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.prop(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container text-center">
     <h3>Are you sure want to Logout ?</h3>
     <br/>
      <button type="submit">Log Out</button>
    </form>
  );
};

export default LogOut;