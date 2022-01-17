import React from 'react'

import {GiHeartWings} from "react-icons/gi";

function NavBar() {
    return (
        <div className='navBar'>
            <a >Home</a>
            
            <div className='navF' style={{flexDirection: "row-reverse" , }}>
                Favorites
                
                <GiHeartWings/>
                
            </div>
            
        </div>
    )
}

export default NavBar


