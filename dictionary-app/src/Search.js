import React, { Component } from 'react'

const news_key = process.env.REACT_APP_NEWS_KEY

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderArticles = this.renderArticles.bind(this)
    }

    getNews(){
        let endPoint = `https://newsapi.org/v2/everything?q=${this.props.keyword}&apiKey=${news_key}&pageSize=3`
        fetch(endPoint)
        .then((response) => {return response.json()})
        .then((json) => {
          console.log(json)
          this.setState({ news: json.articles })})
    }

    renderArticles() {
        return this.state.news.map(article => (
        <div className="article" key={Math.random()}>
            <p className="title"key={Math.random()}>{article.title}</p>
            <p className="author"key={Math.random()}>{`by: ${article.author}`}</p>
            <a href={article.url}>Link</a> 
            <img src={article.urlToImage} alt=""/>
        </div>
        ))
    }

    handleClick(e) {
        e.preventDefault()
        console.log('handleclick is working')
        this.getNews()
    }

    componentDidMount(){
        this.renderArticles()
    }

    render(){
    return (
        <div>
            <form className="form" onSubmit={this.props.handleSubmit}>
                <label>
                    <input className="input" type="text" placeholder="search" value={this.props.keyword} onChange={this.props.handleChange} />
                </label>
                <input className="button" type="submit" value="Submit" />
            </form>
            <div className="results">
                <h1>{this.props.keyword}</h1>
                <p>{this.props.partOfSpeech}</p>
                <div>{this.props.renderStems()}</div>
                <p>{this.props.shortdef}</p>

                {/* <div className="quote-1">
                    {this.props.quote1Text &&
                        <p>{this.props.quote1Text}</p>}
                    {this.props.quote1Author &&
                        <p>{this.props.quote1Author}</p>}
                </div>
                <div className="quote-2">
                    {this.props.quote2Text &&
                        <p>{this.props.quote2Text}</p>}
                    {this.props.quote2Author &&
                        <p>{this.props.quote2Author}</p>}
                </div> */}
            </div>
        
            <button onClick={this.handleClick}>Get News</button>
            {this.props.keyword &&
                <div className="articles">{this.renderArticles()}</div>
            }
            </div>
    )
    
    }
}

export default Search