import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'

export default () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div>
      <AppBar title='My AppBar' />
      <h1>Hello React</h1>
      <p>React Hot Loader</p>
      <RaisedButton label='Default' />
    </div>
  </MuiThemeProvider>
)
