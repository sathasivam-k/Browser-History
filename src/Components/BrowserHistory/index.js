import './index.css'

const BrowserHistory = props => {
  const {searchInputeach, deleteHistory} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = searchInputeach

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p className="list-container-title">{title}</p>
      <p className="list-container-url">{domainUrl}</p>
      <div>
        <button data-testid="delete" type="button" onClick={onDeleteHistory}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
