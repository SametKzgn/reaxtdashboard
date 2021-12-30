import React from 'react'
import { useEffect, useState } from "react";
import { AiFillMeh } from "react-icons/ai";

function Walletbalance() {

    const [wall, setWallet] = useState([]);

    useEffect(() => {
        console.log("veri alınıyor");
        fetch("https://601d848abe5f340017a19c29.mockapi.io/dashboard").then(res => {
            res.json().then((data) => setWallet(data.wallet));/* data.user dedık cunku user ana baslık */
        });
    });


    return (
        <div className='wallet-main'>

            <div className="ur-wallet"><h5 >{wall && wall.title}</h5>
                <h5>Feb 2. 2021</h5>
            </div>

            <div className='middle-balance'>
                <div className='balance'>  <h4 className='text-size'>{wall.balance && wall.balance.title}</h4></div>

                <div className='balance-value' > <h4 className='usd'>{wall.balance && wall.balance.currency}</h4>
                    <h4 className='usd2'>{wall.balance && wall.balance.value}</h4></div>

                <div className='icons-container'>

                    <h4 > <AiFillMeh size={40} color='#6845c5' /> Withdraw </h4>
                    <h4> <AiFillMeh size={40} color='#6845c5' />Fund Wallet </h4>
                    <h4>  <AiFillMeh size={40} color='#6845c5' />Transactions </h4>

                </div>

            </div>



        </div>


    )
}

export default Walletbalance
