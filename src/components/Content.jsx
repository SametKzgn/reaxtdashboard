import React from 'react'

import Contentright from './Contentright'

import Sidebar from './Sidebar'
import Walletbalance from './Walletbalance'

function Content() {

    return (
        <div className='content'>
            <Contentright />
            <Sidebar />
        </div>
    )
}

export default Content
