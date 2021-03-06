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
            shortdef: '',
            quote1Text: '',
            quote1Author: '',
            quote2Text: '',
            quote2Author: '',
            isClicked: false
        }
        this.handleMSClick = this.handleMSClick.bind(this)
        this.handleBGClick = this.handleBGClick.bind(this)
        this.handleHBClick = this.handleHBClick.bind(this)
        this.handleHangryClick = this.handleHangryClick.bind(this)
        this.handleRandoClick = this.handleRandoClick.bind(this)
        this.handleBougClick = this.handleBougClick.bind(this)
        this.handleTruthClick = this.handleTruthClick.bind(this)
        this.handleCBClick = this.handleCBClick.bind(this)
    }

    handleMSClick(e){
        e.stopPropagation()
        let word = this.state.data[0].keyword
        let pOS= this.state.data[0].partOfSpeech
        let prs= this.state.data[0].pronunciation
        let def= this.state.data[0].shortdef
        let q1= this.state.data[0].quote1Text
        let q1auth= this.state.data[0].quote1Author
        let q2= this.state.data[0].quote2Text
        let q2auth= this.state.data[0].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleBGClick(e){
        e.stopPropagation()
        let word = this.state.data[1].keyword
        let pOS= this.state.data[1].partOfSpeech
        let prs= this.state.data[1].pronunciation
        let def= this.state.data[1].shortdef
        let q1= this.state.data[1].quote1Text
        let q1auth= this.state.data[1].quote1Author
        let q2= this.state.data[1].quote2Text
        let q2auth= this.state.data[1].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleHBClick(e){
        e.stopPropagation()
        let word = this.state.data[2].keyword
        let pOS= this.state.data[2].partOfSpeech
        let prs= this.state.data[2].pronunciation
        let def= this.state.data[2].shortdef
        let q1= this.state.data[2].quote1Text
        let q1auth= this.state.data[2].quote1Author
        let q2= this.state.data[2].quote2Text
        let q2auth= this.state.data[2].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleHangryClick(e){
        e.stopPropagation()
        let word = this.state.data[3].keyword
        let pOS= this.state.data[3].partOfSpeech
        let prs= this.state.data[3].pronunciation
        let def= this.state.data[3].shortdef
        let q1= this.state.data[3].quote1Text
        let q1auth= this.state.data[3].quote1Author
        let q2= this.state.data[3].quote2Text
        let q2auth= this.state.data[3].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleRandoClick(e){
        e.stopPropagation()
        let word = this.state.data[4].keyword
        let pOS= this.state.data[4].partOfSpeech
        let prs= this.state.data[4].pronunciation
        let def= this.state.data[4].shortdef
        let q1= this.state.data[4].quote1Text
        let q1auth= this.state.data[4].quote1Author
        let q2= this.state.data[4].quote2Text
        let q2auth= this.state.data[4].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleBougClick(e){
        e.stopPropagation()
        let word = this.state.data[5].keyword
        let pOS= this.state.data[5].partOfSpeech
        let prs= this.state.data[5].pronunciation
        let def= this.state.data[5].shortdef
        let q1= this.state.data[5].quote1Text
        let q1auth= this.state.data[5].quote1Author
        let q2= this.state.data[5].quote2Text
        let q2auth= this.state.data[5].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: q2,
            quote2Author: q2auth,
            isClicked: true
        })
    }

    handleTruthClick(e){
        e.stopPropagation()
        let word = this.state.data[6].keyword
        let pOS= this.state.data[6].partOfSpeech
        let prs= this.state.data[6].pronunciation
        let def= this.state.data[6].shortdef
        let q1= this.state.data[6].quote1Text
        let q1auth= this.state.data[6].quote1Author
        let q2= this.state.data[6].quote2Text
        let q2auth= this.state.data[6].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: `"${q2}"`,
            quote2Author: `- ${q2auth}`,
            isClicked: true
        })
    }

    handleCBClick(e){
        e.stopPropagation()
        let word = this.state.data[7].keyword
        let pOS= this.state.data[7].partOfSpeech
        let prs= this.state.data[7].pronunciation
        let def= this.state.data[7].shortdef
        let q1= this.state.data[7].quote1Text
        let q1auth= this.state.data[7].quote1Author
        let q2= this.state.data[7].quote2Text
        let q2auth= this.state.data[7].quote2Author
        this.setState({
            keyword: word,
            partOfSpeech: pOS,
            pronunciation: prs,
            shortdef: def,
            quote1Text: `"${q1}"`,
            quote1Author: `- ${q1auth}`,
            quote2Text: q2,
            quote2Author: q2auth,
            isClicked: true
        })
    }

    render(){
        return(
            <div className="buzzword-page">
                <p className="buzz-description">A selection of words added to the Merriam Webster Dictionary between 2015-2018. Incorporate these into your vocabulary and be well equipped to ease through social conversation.</p>
                <div className="buttons">
                    <button className="buzz-button" onClick={this.handleMSClick}>mansplain</button>
                    <button className="buzz-button" onClick={this.handleBGClick}>bingeable</button>
                    <button className="buzz-button" onClick={this.handleHBClick}>humblebrag</button>
                    <button className="buzz-button" onClick={this.handleHangryClick}>hangry</button>
                    <button className="buzz-button" onClick={this.handleRandoClick}>rando</button>
                    <button className="buzz-button" onClick={this.handleBougClick}>bougie</button>
                    <button className="buzz-button" onClick={this.handleTruthClick}>truther</button>
                    <button className="buzz-button" onClick={this.handleCBClick}>clickbait</button>
                </div>
                <div className={this.state.isClicked ? "border" : "no-border"} id="buzz-definitions">
                    <p className="buzz-keyword">{this.state.keyword}</p>
                    <p className="buzz-pos">{this.state.partOfSpeech}</p>
                    <p className="buzz-prs">{this.state.pronunciation}</p>
                    <p className="buzz-def">{this.state.shortdef}</p>
                </div>
                <div className="buzz-quotes">
                    <div className="buzz-quote1">
                        <p className="buzz-q1">{this.state.quote1Text}</p>
                        <p className="buzz-q1auth">{this.state.quote1Author}</p>
                    </div>
                    <div className="buzz-quote2">
                        {this.state.quote2Text &&
                        <p className="buzz-q2">{this.state.quote2Text}</p>}
                        {this.state.quote2Author &&
                        <p className="buzz-q2auth">{this.state.quote2Author}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Buzzwords
