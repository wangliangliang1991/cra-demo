import React, { Component } from 'react'

import styles from './style.less'

class Login extends Component {
  state = {}

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.title}>后台管理系统</header>
        <div>
          login
        </div>
      </div>
    )
  }
}

export default Login
