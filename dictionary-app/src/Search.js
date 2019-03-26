import React from 'react'

function Search(props) {

    return (
        <div>
            <form className="form" onSubmit={props.handleSubmit}>
                <label>
                    <input className="input" type="text" placeholder="search" value={props.keyword} onChange={props.handleChange} />
                </label>
                <input className="button" type="submit" value="Submit" />
            </form>
            <div className="results">
                <h1>{props.keyword}</h1>
                <p>{props.partOfSpeech}</p>
                <div>{props.renderStems()}</div>
                <p>{props.shortdef}</p>

                <div className="quote-1">
                    {props.quote1Text &&
                        <p>{props.quote1Text}</p>}
                    {props.quote1Author &&
                        <p>{props.quote1Author}</p>}
                </div>
                <div className="quote-2">
                    {props.quote2Text &&
                        <p>{props.quote2Text}</p>}
                    {props.quote2Author &&
                        <p>{props.quote2Author}</p>}
                </div>
            </div>
        </div>
    )
    
}

export default Search