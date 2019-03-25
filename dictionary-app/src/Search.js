import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.props.handleSubmit}>
                    <label>
                        <input className="input" type="text" placeholder="search" value={this.props.keyword} onChange={this.props.handleChange} />
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Search