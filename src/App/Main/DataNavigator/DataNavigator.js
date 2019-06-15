import React from "react";
import { Switch, Route } from "react-router-dom";
import UniversitiesNavigator from "./UniversitiesNavigator/UniversitiesNavigator";
import CoursesNavigator from "./CoursesNavigator/CoursesNavigator";
import ChooseNavigator from "./ChooseNavigator/ChooseNavigator";

function DataNavigator() {
  return (
    <div className="DataNavigator">
      <Switch>
        <Route exact path="/universities" component={UniversitiesNavigator} />
        <Route exact path="/courses" component={CoursesNavigator} />

        {/* THIS IS THE DEFAULT ROUTE*/}
        <Route component={ChooseNavigator} />
      </Switch>
    </div>
  );
}

export default DataNavigator;
