import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header.jsx'
import DataNavigator from './dataNavigation/DataNavigator'
import CourseViewer from './dataViewer/CourseViewer'
import UniversityViewer from './dataViewer/UniversityViewer'

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/dataNavigator" component={DataNavigator} />
      <Route exact path="/course/:id" component={CourseViewer} />
      <Route exact path="/university/:id" component={UniversityViewer} />

      {/* Default Route */}
      <Route render={() => <Redirect to="/dataNavigator" />} />
    </Switch>
  </div>
)

export default App
