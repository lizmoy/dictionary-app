import React, { Component } from 'react';
import data from './data/data'

class Buzzwords extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            keyword: '',
            partOfSpeech: '',
            pronunciation: '',
            shortdef: ''      
        }
        this.handleMSClick = this.handleMSClick.bind(this)
        this.handleBGClick = this.handleBGClick.bind(this)
        this.handleHBClick = this.handleHBClick.bind(this)
        this.handleHangryClick = this.handleHangryClick.bind(this)
        this.handleRandoClick = this.handleRandoClick.bind(this)
    }

    handleMSClick(e){
        e.stopPropagation()
        console.log('handleMSClick is working')
        let word = this.state.data[0].keyword
        let pOS= this.state.data[0].partOfSpeech
        let prs= this.state.data[0].pronunciation
        let def= this.state.data[0].shortdef
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def
        })
    }

    handleBGClick(e){
        e.stopPropagation()
        console.log('handleBGClick is working')
        let word = this.state.data[1].keyword
        let pOS= this.state.data[1].partOfSpeech
        let prs= this.state.data[1].pronunciation
        let def= this.state.data[1].shortdef
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def
        })
    }

    handleHBClick(e){
        e.stopPropagation()
        console.log('handleHBClick is working')
        let word = this.state.data[2].keyword
        let pOS= this.state.data[2].partOfSpeech
        let prs= this.state.data[2].pronunciation
        let def= this.state.data[2].shortdef
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def
        })
    }

    handleHangryClick(e){
        e.stopPropagation()
        console.log('handleHangryClick is working')
        let word = this.state.data[3].keyword
        let pOS= this.state.data[3].partOfSpeech
        let prs= this.state.data[3].pronunciation
        let def= this.state.data[3].shortdef
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def
        })
    }

    handleRandoClick(e){
        e.stopPropagation()
        console.log('handleRandoClick is working')
        let word = this.state.data[4].keyword
        let pOS= this.state.data[4].partOfSpeech
        let prs= this.state.data[4].pronunciation
        let def= this.state.data[4].shortdef
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def
        })
    }

    render(){
        return(
            <div className="buzzword-page">
                <p className="buzz-description">A selection of words added to the Merriam Webster Dictionary between 2015-2018. Incorporate these into your vocabulary and ease through social situations with your newfound knowledge.</p>
                <div className="buttons">
                    <button className="buzz-button" onClick={this.handleMSClick}>mansplain</button>
                    <button className="buzz-button" onClick={this.handleBGClick}>bingeable</button>
                    <button className="buzz-button" onClick={this.handleHBClick}>humblebrag</button>
                    <button className="buzz-button" onClick={this.handleHangryClick}>hangry</button>
                    <button className="buzz-button" onClick={this.handleRandoClick}>rando</button>
                    <button className="buzz-button">bougie</button>
                    <button className="buzz-button">truther</button>
                    <button className="buzz-button">clickbait</button>
                </div>
                <div className="buzz-definitions">
                    {this.state.keyword}
                    {this.state.partOfSpeech}
                    {this.state.pronunciation}
                    {this.state.shortdef}
                </div>
            </div>
        )
    }
}

export default Buzzwords
