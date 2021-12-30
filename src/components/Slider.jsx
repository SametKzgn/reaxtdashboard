import React, { useState, useEffect } from 'react'
import { AiOutlineInfoCircle, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



function Slider({ data }) {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  var sliderSize = matches ? [0, 3] : [0, 5];

  const [current, setCurrent] = useState(sliderSize);
  const [showingData, setShowingData] = useState(
    data.slice(sliderSize[0], sliderSize[1])
  );

  useEffect(() => {
    setShowingData(data.slice(current[0], current[1]));
    // eslint-disable-next-line
  }, [current]);

  const nextSlide = () => {
    if (current[1] < data.length) {
      setCurrent([current[0] + 5, current[1] + 5]);
    }
  };

  const prevSlide = () => {
    if (current[0] > 0) {
      setCurrent([current[0] - 5, current[1] - 5]);
    }
  };

  if (!Array.isArray(data) || data.length <= 0) return null;
  return (

    <div className="lastcard-maincontainer">

      <h6 className='make'> MAKE PAYMENTS<AiOutlineInfoCircle size={25} color='#6845c5' /></h6>


      <div className='icons-class'>

        <button onClick={nextSlide} className='right'> <AiOutlineRight />  </button>

        {showingData.map((payment, index) => (
          <div key={index} className='txt-icon'><span className={`${payment.icon}`} > </span><p> {payment.title}</p></div>
        ))}

        <button onClick={prevSlide} className='left'> <AiOutlineLeft /> </button>
      </div>

    </div>

  )
}

export default Slider
