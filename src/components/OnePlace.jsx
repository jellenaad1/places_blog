import React from 'react'
import {RiHeartAddLine} from "react-icons/ri";

function OnePlace() {
    return (
        <div className='place-item' style={{margin: 7+"em",}}>
            <img className='place-item-img' src='https://images.unsplash.com/photo-1605822640211-55f4a9f04cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='Cliffs of moher, Ireland' />
            <div className="place-item-body">


                <h3 className="place-item-title text-center">Cliffs of moher, Ireland</h3>
                <p className="place-item-text">The Cliffs of Moher are an important part of the coastal landscape in Ireland.
                 They are characterised by their height and length, a sheer drop into the sea below and craggy rock formations.
                 From the top, you could spot sea stacks, caves and other coastal landforms. A highlight is the Branaunmore sea 
                 stack, which stands 67 metres (220 feet) high. It was once part of the cliffs but was separated due to erosion.
                 </p>
                 



            </div>

            <button className="btn">
                
                Add to favorites
                <RiHeartAddLine />
                </button>
                
        </div>
    )
}

export default OnePlace
