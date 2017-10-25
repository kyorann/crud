import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classNames from 'classnames'
import { filterListActions } from 'actions'
import { personsListSelector } from './select'
import './persons-list.less'

class PersonsList extends Component {

  handleSortByClick = ev => {
    const name = ev.target.getAttribute('name')

    if (name) {
      const { filterListActions: { sortList } } = this.props
      sortList(name)
    }
  }

  renderPersonsListHeader() {
    const { sortBy, sortDescending } = this.props
    const fields = [
      { name: 'firstName', label: 'First Name' },
      { name: 'lastName', label: 'Last Name' },
      { name: 'birthDate', label: 'Birth Date' },
      { name: 'phone', label: 'Phone' },
      { name: 'adress', label: 'Adress' },
      { name: 'notes', label: 'Notes' },
    ]

    const iconClass = sortDescending ? 'fa fa-angle-down' : 'fa fa-angle-up'

    return fields.map(field => {
      const fieldClass = classNames(
        'persons-list__header',
        { 'persons-list__header--sorted': sortBy === field.name }
      )
      return (
        <th key={field.name} className={fieldClass} name={field.name}>
          <i className={iconClass}></i>
          {field.label}
        </th>
      )
    })
  }

  renderPersonsList() {
    const { personsList } = this.props

    return personsList.map(person => (
      <tr name={person.id} key={person.id}>
        <td className="persons-list__cell">{person.firstName}</td>
        <td className="persons-list__cell">{person.lastName}</td>
        <td className="persons-list__cell">{person.birthDate}</td>
        <td className="persons-list__cell">{person.phone}</td>
        <td className="persons-list__cell">{person.adress}</td>
        <td className="persons-list__cell">{person.notes}</td>
      </tr>
    ))
  }


  render() {
    return (
      <div className="col-12">

        <table className="persons-list">
          <thead>
            <tr onClick={this.handleSortByClick}>
              {this.renderPersonsListHeader()}
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            component="tbody"
            transitionName="persons-list__cell--transition"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.renderPersonsList()}
          </ReactCSSTransitionGroup>
        </table>

        {this.props.children}
      </div>
    )
  }
}

PersonsList.propTypes = {
  personsList: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDescending: PropTypes.bool.isRequired,
  filterListActions: PropTypes.object.isRequired,
  children: PropTypes.element,
}


function mapStateToProps(state) {
  return {
    personsList: personsListSelector(state),
    sortBy: state.filterList.sortBy,
    sortDescending: state.filterList.sortDescending,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterListActions: bindActionCreators(filterListActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList)
