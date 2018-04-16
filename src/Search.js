import React, {Component} from 'react'
import './Search.css'


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
      <div className="search-div">
        <div className="submit-div">
        <input
          className="search-input"
          type='text'
          value={this.state.searchInput}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value
            })
          }}
        />
        {/* <select
        className="search-input"
          value={this.state.suggestCities}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value
            })
          }}
        >  */}
          {/* {this.state.suggestCities.map((city, index)=> {
            return <option key={index} value={city}>{city}</option>
          })
          }
        </select> */}
        <button className="submit-button"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.getWeather(this.state.searchInput)
                }}
        > submit</button>
        </div>
      </div>
    )
  }
}

export default Search
