
import React from 'react'
import Button from '@mui/material/Button';
import './Form.css'

export default function Form() {
  return (
    <>
    <div className='bold2' style={{marginLeft: '42%', marginTop: '50px', color: 'blueviolet'}}><h1>Contact US</h1></div>
    <div className='margin'>
    

    <div style={{color:'white',marginBottom: '5px'}}>userName</div>
    <div>
      <input style={{height:'30px',width:'500px'}} type="text" placeholder="Enter your Name" />
    </div>

    <div style={{color:'white',marginBottom: '5px'}}>Email</div>
    <div>
      <input style={{height:'30px',width:'500px'}} type="text" placeholder="Enter your Email" />
    </div>


    <div style={{color:'white',marginBottom: '5px'}}>Message</div>
    <div>
      <input 
       style={{height:'100px',width:'500px',textAlign:'left'}} type="text" placeholder="Enter your Text" />
    </div>

    <div className='b3'><Button variant="contained">Submit</Button></div>


    </div>

    </>
  )
}

