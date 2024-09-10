import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';
export default function header() {
  return (
    <>
      <div className='bold2' style={{marginLeft: '45%', marginTop: '50px', color: 'blueviolet'}}><h1>Home</h1></div>
     <div className="parent2">
     <div className="child1">
      <div className='s1'>
         <div className='bold2'>
            Hello!
        </div>
        <div className='bold2'>I'm TAHA</div>
        <div className='bold2'>Website Developer</div>
        <div className='bold'> I am skilled Passionate website develpoer using HTML,CSS,JAVASCRIPT</div>
        <div className='bold'>with the help of diffrent librarirs like bootstrap,materialized css etc</div>
        <div className='bold'>and with the help of several React libraries like materialized UI,React Bootstrap.</div>
        <div style={{ marginTop: '20px' }}><Button variant="contained">Hire Me</Button></div>
     </div>
     <div className='img2'><img className='img'  src="/2.jpeg" alt="Beautiful landscape with mountains and a lake" /></div>
     </div>
    
     </div>
       


    </>
  )
}
