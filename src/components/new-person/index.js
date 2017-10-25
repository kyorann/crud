import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { newPersonActions } from 'actions'
import { routerActions } from 'react-router-redux'
import { Modal, Button } from 'components/ui'
import './new-person.less'

class NewPerson extends Component {
  handleChange = e => {
    const { newPersonActions: { updateNewPersonInfo } } = this.props
    const val = e.target.value
    const field = e.target.getAttribute('name')
    updateNewPersonInfo(field, val)
  }

  handleSubmit = e => {
    const { newPersonActions: { addPerson, resetPersonInfo }, newPerson, routerActions: { goBack } } = this.props
    e.preventDefault()
    newPerson.id = this.generateId()
    addPerson(newPerson)
    resetPersonInfo()
    goBack()
  }

  generateId() {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 8; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
  }

  render() {
    const { newPerson } = this.props

    return (
      <Modal>
        <div>
          <div className="new-person__header">Add new person</div>
          <form
            className="new-person__form"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            <div className="row">
              <div className="col-6">
                <div className="new-person__form__group">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" name="firstName" id="firstName" value={newPerson.firstName} required />
                </div>
                <div className="new-person__form__group">
                  <label htmlFor="birthDate">Date of birth</label>
                  <input type="date" name="birthDate" id="birthDate" value={newPerson.birthDate} required />
                </div>
                <div className="new-person__form__group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={newPerson.email} required />
                </div>
              </div>
              <div className="col-6">
                <div className="new-person__form__group">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" name="lastName" id="lastName" value={newPerson.lastName} required />
                </div>
                <div className="new-person__form__group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name="phone" id="phone" value={newPerson.phone} required />
                </div>
                <div className="new-person__form__group">
                  <label htmlFor="adress">Adress</label>
                  <input type="text" name="adress" id="adress" value={newPerson.adress} required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="new-person__form__group">
                  <label htmlFor="notes">Notes</label>
                  <textarea type="text" name="notes" id="notes" value={newPerson.notes}>
                  </textarea>
                </div>
              </div>
              <br /><br />
              <div className="text-center">
                <Button className="btn"><i className="fa fa-plus"></i> ADD PERSON</Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}

NewPerson.propTypes = {
  newPerson: PropTypes.object.isRequired,
  newPersonActions: PropTypes.object.isRequired,
  routerActions: PropTypes.object.isRequired,
}


function mapStateToProps(state) {
  return {
    newPerson: state.newPerson,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    newPersonActions: bindActionCreators(newPersonActions, dispatch),
    routerActions: bindActionCreators(routerActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPerson)
