import React, { PropTypes } from 'react'
import DevTools from '../devtools'
import { Header, Search } from 'components'
import { Link } from 'react-router'
import './app.less'

const isProd = process.env.NODE_ENV === 'production'

const App = (props) => {
  const { children } = props

  return (
    <div>
      <div id="app">
        <Header />
        <div className="container">
          <div className="col-6 text-left">
            <Search />
          </div>
          <div className="col-6 text-right">
            <Link to="/persons-list/add-person" className="btn"><i className="fa fa-user-plus"></i> Add person</Link>
          </div>
        </div>
        <div className="container">
          {children}
        </div>
      </div>
      {!isProd && <DevTools />}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element,
}

export default App
