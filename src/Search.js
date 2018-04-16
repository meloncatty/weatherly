import React, {Component} from 'react'
import trie from './locationTrie.js'
import './Search.css'


class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput : '',
      suggestCities: [],

    }
  }

  render() {
    return (
      <div className="search-div">
        <input
          className="search-input"
          type='text'
          value={this.state.searchInput}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value,
              suggestCities: trie.suggest(event.target.value)
            })
          }}
        />
         <datalist
          className="search-input"
        >
          {
              this.state.suggestCities.map((city, index)=> {
            return <option key={index} value={city}/>
          })
          }

        </datalist>
        <button className="submit-button"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.getWeather(this.state.searchInput)
                }}
        > submit</button>
      </div>
    )
  }
}

export default Search
