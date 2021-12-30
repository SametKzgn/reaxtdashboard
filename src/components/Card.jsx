import React from 'react'
import Cashcard from './Cashcard'
import Walletbalance from './Walletbalance'

function Card() {
    return (
        <div className='cards'>
            <Walletbalance />
            <Cashcard />
        </div>
    )
}

export default Card
