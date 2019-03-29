import React from 'react';
import title from './images/title.svg'

function Homepage(){ 
    return(
        <div className="homepage">
            <img src={title} alt="" className="title"/>
            <p className="tagline">a dictionary app for curious conversationalists </p>
        </div>
    ) 
}

export default Homepage