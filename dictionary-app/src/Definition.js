import React from 'react';

function Definition(props){
    return(
        <div className={props.isFilled ? "color-fill" : "no-fill"} id="definition">
            <div className="def-1">
                <h1 className="keyword">{props.keyword}</h1>
                <p className="pos">{props.partOfSpeech}</p>
                <p className="pronunciation">{props.pronunciation}</p>
                <div className="stems">{props.renderStems()}</div>
            </div>
            <div className="def-2">
                <p className="shortdef">{props.shortdef}</p>
            </div>
        </div>
    )
}

export default Definition