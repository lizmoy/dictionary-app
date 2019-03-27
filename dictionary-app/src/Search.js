import React, { Component } from 'react'
import staricon from './images/staricon.svg'


class Search extends Component {
    render(){
    return (
        <div>
            <form className="form" onSubmit={this.props.handleSubmit}>
                <label>
                    <input className="input" type="text" placeholder="search" value={this.props.keyword} onChange={this.props.handleChange} />
                </label>
                <input className="button" type="submit" value="Submit" />
            </form>
            <div className="definition">
                <h1>{this.props.keyword}</h1>
                <p>{this.props.pronunciation}</p>
                <p>{this.props.partOfSpeech}</p>
                <div>{this.props.renderStems()}</div>
                <p>{this.props.shortdef}</p>
            </div>
            <div><img src={staricon} alt="" className="star-icon" onClick={this.handleClick}/></div>
        </div>
    )
    
    }
}

export default Search