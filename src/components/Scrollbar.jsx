import React, { useRef } from 'react'

let arr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];

const Scrollbar = () => {
  const numsRef = useRef();

  const scrollLeft = () => {
    numsRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    numsRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
  };

  return (
    <div className='container'>
      <div className='nums' ref={numsRef}>
        <ul>
          {
            arr.map((item) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
      <div className='btnContainer'>
        <button className='btn1' onClick={scrollLeft}>Left Scroll</button>
        <button className='btn2' onClick={scrollRight}>Right Scroll</button>
      </div>
    </div>
  )
}

export default Scrollbar