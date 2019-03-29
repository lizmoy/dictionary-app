import React, { Component } from 'react'
import Definition from './Definition'
import News from './News'

class Search extends Component {
    render(){
    return (
        <div className="search-page">
            <p className="instructions">Enter a word in the search bar to get a definition. For news items related to your search, click the newspaper icon and scroll down to view.</p>
            <form className="form" onSubmit={this.props.handleSubmit}>
                <label>
                    <input className="input" type="text" placeholder="search" value={this.props.keyword} onChange={this.props.handleChange} />
                </label>
                <input className="submit" type="submit" value="Submit" />
            </form>
            <div className="search-results">
            <Definition
                keyword={this.props.keyword}
                handleChange={this.props.handleChange}
                handleSubmit={this.props.handleSubmit}
                pronunciation={this.props.pronunciation}
                partOfSpeech={this.props.partOfSpeech}
                renderStems={this.props.renderStems}
                shortdef={this.props.shortdef}
                isSubmitted={this.props.isSubmitted}
            />
            <News keyword={this.props.keyword}/>
            </div>
        </div>
    )
    
    }
}

export default Search