import './index.css'

const SuggestionItem = props => {
  const {eachItem, displaySuggestion} = props
  const {suggestion} = eachItem

  const onClickSuggestion = () => {
    displaySuggestion(suggestion)
  }

  return (
    <li className="item-con">
      <p className="text">{suggestion}</p>
      <button className="del-btn" onClick={onClickSuggestion} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
