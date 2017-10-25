import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { filterListActions } from 'actions'
import './search.less'

class Search extends Component {

  handleChange = e => {
    const { filterListActions: { updateSearch } } = this.props
    const val = e.target.value
    updateSearch(val)
  }

  render() {
    const { searchBy } = this.props

    return (
      <form className="search-form">
        <div className="search-form__group">
          <input type="text" value={searchBy} className="search-form__input" onChange={this.handleChange} />
          <i className="fa fa-search"></i>
        </div>
      </form>
    )
  }
}

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  filterListActions: PropTypes.object.isRequired,
}


function mapStateToProps(state) {
  return {
    searchBy: state.filterList.searchBy,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterListActions: bindActionCreators(filterListActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
