import React, {Component} from 'react'

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
      <div>
        <input
          type='text'
          value={this.state.searchInput}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value
            })
          }}
        />
        <select
          value={this.state.suggestCities}
          onChange={(event) => {
            this.setState({
              searchInput: event.target.value
            })
          }}
        > 
          {this.state.suggestCities.map((city, index)=> {
            return <option key={index} value={city}>{city}</option>
          })
          }
        </select>
        <button className="submit"
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
