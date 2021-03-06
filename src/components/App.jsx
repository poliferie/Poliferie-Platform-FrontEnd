import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Helper from "./Helper.jsx";
import DataNavigator from "./dataNavigation/DataNavigator";
import CourseViewer from "./dataViewer/CourseViewer";
import UniversityViewer from "./dataViewer/UniversityViewer";
import Navbar from "./Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EA4242'
    },
    secondary: {
      main: '#CCCCCC'
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
  <div>
    <Navbar></Navbar>
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <Switch>
        <Route exact path="/" component={DataNavigator} />
        <Route exact path="/course/:id" component={CourseViewer} />
        <Route exact path="/university/:id" component={UniversityViewer} />

        {/* Default Route */}
        <Route render={() => <Redirect to="/" />} />
      </Switch>
      {/*<Header />*/}
      <Helper />
    </div>
  </div>
  </ThemeProvider>
);

export default App;
