import React from 'react'

function Lastcards() {
  return (
    <div className="cake-card active">

      <div className='cake1'>
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F05%2F19%2Fycct-one-bowl-chocolate-cake-photo-by-allrecipes-1-2000.jpg" alt="" />                <h4>Chocolate Cake</h4>
        <h4 className='cake-color' >Cakes</h4>
        <h4 className='cake-color'>13/12/2004</h4>
        <button className='cake-button'>PROCESSED</button>
        <div className='check1'>  <input type="checkbox" className='checkbox1' /></div>

      </div>
      <div className='cake-main'>
        <div className='cake2' >
          <img src="https://i.pinimg.com/564x/52/5f/24/525f245fec07bde7307c4bf314970892.jpg" alt="" />
          <h4> OAT Cake</h4>
          <h4 className='cake-color' >Cakes</h4>
          <h4 className='cake-color'>10/12/2004</h4>
          <button className='cake-button2'>ON HOLD</button>
          <div className='check1'>  <input type="checkbox" className='checkbox1' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Lastcards