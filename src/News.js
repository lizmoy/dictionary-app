import React, { Component } from 'react'
import newsicon from './images/newsicon.svg' 

const news_key = process.env.REACT_APP_NEWS_KEY

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderArticles = this.renderArticles.bind(this)
    }

    getNews(){
        let endPoint = `https://newsapi.org/v2/everything?q=${this.props.keyword}&apiKey=${news_key}&pageSize=6`
        fetch(endPoint)
        .then((response) => {return response.json()})
        .then((json) => {
          this.setState({ news: json.articles })})
    }

    renderArticles() {
        return this.state.news.map(article => (
        <div className="article" key={Math.random()}>
            <p className="article-title"key={Math.random()}>{article.title}</p>
            <p className="article-author"key={Math.random()}>{`by: ${article.author}`}</p>
            <a href={article.url}>Link</a> 
            <img src={article.urlToImage} alt=""/>
        </div>
        ))
    }

    handleClick(e) {
        e.preventDefault()
        this.getNews()
    }

    componentDidMount(){
        this.renderArticles()
    }
    render(){
        return(
            <div>
                <div className="icon-div"><img src={newsicon} alt="" className="news-icon" onClick={this.handleClick}/></div>
                <div className="articles">{this.renderArticles()}</div>
            </div>
        )
    }
}
export default News