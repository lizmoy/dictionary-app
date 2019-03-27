import React from 'react';

function Definition(props){
    return(
        <div className="definition">
            <h1>{props.keyword}</h1>
            <p>{props.pronunciation}</p>
            <p>{props.partOfSpeech}</p>
            <div>{props.renderStems()}</div>
            <p>{props.shortdef}</p>
        </div>
    )
}

export default Definition