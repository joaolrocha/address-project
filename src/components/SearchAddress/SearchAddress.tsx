import SearchTextField from "../SearchTextField/SearchTextField"

import './_searchAddress.scss'

const SearchAddress = () => {
  return (
    <div className="search-address-container">
      <div className="search-address-container-textfield">
        <SearchTextField />
      </div>
      <div className="search-address-container-button">
        <button>Add Address</button>
      </div>
    </div>
  )
}

export default SearchAddress