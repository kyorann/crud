import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './modal.less'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalTop: 0 }
  }

  componentDidMount() {
    this.parent = document.querySelector('.app-view')
    this.updateModalTop()
  }

  updateModalTop() {
    this.setState({ modalTop: this.parent ? this.parent.scrollTop : 0 })
  }

  render() {
    const { hasSpinner, backLink = '/', backLinkHidden = false, customBodyClass, children } = this.props

    if (hasSpinner) {
      return (
        <ReactCSSTransitionGroup
          transitionName="modal-transition"
          transitionAppear
          transitionEnterTimeout={500}
          transitionAppearTimeout={300}
          transitionLeaveTimeout={500}
        >
          <div className="modal" style={{ top: this.state.modalTop }}>
            {children}
          </div>
        </ReactCSSTransitionGroup>
      )
    }

    const closeLink = (
      <Link to={backLink}>
        <div className="modal__close">
          <i className="fa fa-close"></i>
        </div>
      </Link>
    )

    const bodyClass = classNames(
      'modal__body',
      { [`${customBodyClass}`]: customBodyClass }
    )

    return (
      <div className="modal" style={{ top: this.state.modalTop }}>
        <ReactCSSTransitionGroup
          transitionName="modal-transition"
          transitionAppear
          transitionEnterTimeout={500}
          transitionAppearTimeout={300}
          transitionLeaveTimeout={500}
        >
          <div className={bodyClass}>
            {!backLinkHidden && closeLink}
            {children}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

Modal.propTypes = {
  hasSpinner: PropTypes.bool,
  backLinkHidden: PropTypes.bool,
  customBodyClass: PropTypes.string,
  backLink: PropTypes.string,
  children: PropTypes.element.isRequired,
}
