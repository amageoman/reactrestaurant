import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewdata}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className='ps-5 pe-5 ms-5'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Review
      </Button>
      
      <Collapse in={open}>


        
        <div id="example-collapse-text " className='mt-3'style ={{maxWidth:"400px", height:"400px",overflow:"hidden"}} >

           
           {
            reviewdata.map(data=>
                
                <div >
                <h3>{data.name}</h3>
                <h5>{data.date}</h5>
                <h6>{data.rating}</h6>
                <p> {data.comments} </p>
                </div>
                )
           }
              
        
        </div>
      </Collapse>
    
    </>
  );
}

export default Review