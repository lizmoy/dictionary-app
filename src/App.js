import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Search from './Search'
import Buzzwords from './Buzzwords'
import Footer from './Footer'

const api_key = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      wordInfo: [],
      versions: [],
      shortdef: "",
      partOfSpeech: "",
      pronunciation: "",
      isSubmitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderStems = this.renderStems.bind(this)
  }

  handleChange(event) {
    this.setState({ 
      keyword: event.target.value, 
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({isSubmitted: true})
    this.getWord()
  }

  getWord() {
      let endPoint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.keyword}?key=${api_key}`
      fetch(endPoint,
        {
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response =>
          response.json()
        )
        .then(json => {
          let word= this.state.keyword
          this.setState({
            wordInfo: json[0],
            keyword: word,
            versions: json[0].meta.stems,
            shortdef: json[0].shortdef,
            partOfSpeech: json[0].fl,
            pronunciation: json[0].hwi.prs[0].mw,
          })
        })
        .catch(e =>
          console.log(e)
        )
    }

    renderStems() {
      let stems = this.state.versions
      return stems.map(stem => (
        <p className="stem" key={Math.random()}>{stem}</p>
      ))
    }

    render() {
      return (
        <div className="App">
            <nav>
              <ul className="nav">
                <li className="home"><Link to="/">Home</Link></li>
                <li className="search"><Link to="/search">Search</Link></li>
                <li className="pocket"><Link to="/buzzwords">Buzzwords</Link></li>
              </ul>
              <Route exact path="/" component={Homepage} />
              <Route path="/search"
                render={(props) =>
                  <Search
                    keyword={this.state.keyword}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    pronunciation={this.state.pronunciation}
                    partOfSpeech={this.state.partOfSpeech}
                    renderStems={this.renderStems}
                    shortdef={this.state.shortdef}
                    isSubmitted={this.state.isSubmitted}
                    {...props} />}
              />
              <Route path="/buzzwords" component={Buzzwords} />
            </nav>
          <Footer/>
        </div>
      );
    }
  }

  export default App;
