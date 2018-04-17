import React, {Component} from 'react'
import trie from './locationTrie.js'
import './styles/Search.css'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput : '',
      suggestCities: []
    }
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="city"
          type='text'
          list='cities'
          placeholder='Enter a city'
          value={this.state.searchInput}
          onChange={(event) => {
            const suggestions = trie.suggest(event.target.value.toUpperCase())
            event.preventDefault()
            this.setState({
              searchInput: event.target.value,
              suggestCities: suggestions
            })
          }}
        />
        <datalist
          id="cities"
        >
          {this.state.suggestCities &&
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
