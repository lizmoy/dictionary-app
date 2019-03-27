import React, { Component } from 'react'
import Definition from './Definition'
import News from './News'

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
            <Definition
                keyword={this.props.keyword}
                handleChange={this.props.handleChange}
                handleSubmit={this.props.handleSubmit}
                pronunciation={this.props.pronunciation}
                partOfSpeech={this.props.partOfSpeech}
                renderStems={this.props.renderStems}
                shortdef={this.props.shortdef}
            />
            <News keyword={this.props.keyword}/>
        </div>
    )
    
    }
}

export default Search