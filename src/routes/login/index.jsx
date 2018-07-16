import React, { Component } from 'react'
import { Tabs } from 'antd'

import styles from './style.less'

const { TabPane } = Tabs

class Login extends Component {
  state = {}

  render() {
    return (
      <div className={styles.container}>
        <header className={styles.title}>后台管理系统</header>
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Login
