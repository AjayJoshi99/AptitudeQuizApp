import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ContactUs(props) {
  const bool = props.prop;
  const x = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[msg, setMsg] = useState('');

  const submitData= async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/contact_us', {
        name,
        email,
        msg
      });
      if (response.data.success) {
        alert("message succusefully recieved !!!!!")
        x('/')
      } else {
        alert("Error occured Try again later.")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  return (
    <div>
      {bool && (
        <div> <div className="container">
          <h2 className='h1 fst-italic'>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label ml-0">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Ajay Joshi" required onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="ajay1908@gmail.com" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required onChange={(e) => setMsg(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
          </form>
        </div>
          <div className='container mt-4 pt-3 border-top border-dark'>
            <div className='row'>
              <div className='col-4 border-end border-dark'>
                <b>Address:</b><br />
                Rano tower,<br />
                kalavad Road,<br />
                Rajkot - 360005<br />
                Gujarat
              </div>
              <div className='col-4 border-end border-dark'>
                <b>Email : </b><br />
                <p className="text-break">ajayjoshi1908@gmail.com</p>
                 <br />
                <p className="text-break">ajay.joshi119418marwadiuniversity.ac.in</p>
              </div>
              <div className='col-4'>
                <b>Contact N0. : </b> <br />
                9879919024
              </div>
            </div>
          </div>
          </div>
      )}
        {
          !bool && x('Login')
        }

    </div>
  )
}
export default ContactUs;