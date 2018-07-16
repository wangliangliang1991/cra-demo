import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import Authorized from './authorized'

const AuthorizedRoute = ({
  component: Component, render, authority, redirectPath, ...rest
}) => (
  <Authorized
    authority={authority}
    noMatch={<Route {...rest} render={() => <Redirect to={{ pathname: redirectPath }} />} />}
  >
    <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
  </Authorized>
)

AuthorizedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  render: PropTypes.func,
  authority: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.func,
  ]),
  redirectPath: PropTypes.string,
}

AuthorizedRoute.defaultProps = {
  component: null,
  render: () => {},
  authority: '',
  redirectPath: '',
}

export default AuthorizedRoute
