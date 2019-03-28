import React from 'react';

function Definition(props){
    return(
        <div className="definition">
            <div className="base">
                <h1 className="keyword">{props.keyword}</h1>
                <p className="pronunciation">{props.pronunciation}</p>
            </div>
            <p className="pos">{props.partOfSpeech}</p>
            <div className="stems">{props.renderStems()}</div>
            <p className="shortdef">{props.shortdef}</p>
        </div>
    )
}

export default Definition