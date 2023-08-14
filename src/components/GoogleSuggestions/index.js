import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  searchUserInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props

    const filterResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />

        <div className="google-card">
          <div className="input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />

            <input
              type="search"
              value={googleSearch}
              placeholder="Search Google"
              className="google-input"
              onChange={this.searchUserInput}
            />
          </div>

          <ul className="items-con">
            {filterResult.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
