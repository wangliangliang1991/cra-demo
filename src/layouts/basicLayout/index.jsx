import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
/* eslint-disable */
import Exception from 'components/exception'
import Authorized from 'utils/authorized';
import { getMenuData } from '../../common/menu'
import { getRouterData, getRoutes } from '../../common/router'
import Header from './header'
import SiderMenu from './siderMenu'

import styles from './basicLayout.less'

const { Content } = Layout
const { AuthorizedRoute, check } = Authorized;

class BasicLayout extends Component {
  state = {
    collapsed: false,
  }

  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsed } = this.state
    const routerData = getRouterData()
    const path = this.props.history.location.pathname

    return (
      <Layout className={styles.contaniner}>
        <SiderMenu
          collapsed={collapsed}
          menuData={getMenuData()}
        />
        <Layout className="main">
          <Header collapsed={collapsed} onClick={this.handleToggle} />
          <Content className="content">
            <Switch>
              {
                getRoutes(path, routerData).map(item => (
                  <AuthorizedRoute
                    key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                    authority={item.authority}
                    redirectPath="/exception/403"
                  />
                ))
              }
              <Route render={() => <Exception type={404} />} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(BasicLayout)
