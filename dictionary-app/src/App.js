import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Homepage from './Homepage'
import Search from './Search'
import PocketDictionary from './PocketDictionary'

const api_key = process.env.REACT_APP_API_KEY

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      wordInfo: [],
      word: "",
      versions: [],
      shortdef: "",
      partOfSpeech: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderStems = this.renderStems.bind(this)
  }

  handleChange(event){
    console.log("handleChange is running ", event.target.value)
    this.setState({ keyword: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log("handleSubmit is running")
    this.getAPI()
  }

  getAPI(){
    const endPoint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${this.state.keyword}?key=${api_key}`
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
      console.log('data', json)
      this.setState({ 
        wordInfo: json[0],
        word: json[0].meta,
        versions: json[0].meta.stems,
        shortdef: json[0].shortdef,
        partOfSpeech: json[0].fl
      })
      console.log('word', this.state.word)
      console.log('versions', this.state.versions)
    })
    .catch(e => 
      console.log(e)
    )
  }

  renderStems(){
    let stems = this.state.versions
    return stems.map(stem => (
      <p key={Math.random()}>{stem}</p>
    ))
  }


  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/pocket">Pocket Dictionary</Link></li>
          </ul>
            <Route exact path="/" component={Homepage}/>
            <Route path="/search"
              render={(props) => 
                <Search
                  keyword= {this.state.keyword}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  {...props}/>}
            />
            <Route path="/pocket" component={PocketDictionary}/>
        </nav>
        <p>{this.state.partOfSpeech}</p>
        <div>{this.renderStems()}</div>
        <p>{this.state.shortdef}</p>
      </div>
    );
  }
}

export default App;
