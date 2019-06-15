import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UniversitiesNavigator from "./UniversitiesNavigator/UniversitiesNavigator";
import CoursesNavigator from "./CoursesNavigator/CoursesNavigator";

function DataNavigator() {
  return (
    <div className="DataNavigator">
      <BrowserRouter>
        <Route exact path="/universities" component={UniversitiesNavigator} />
        <Route exact path="/courses" component={CoursesNavigator} />
      </BrowserRouter>
    </div>
  );
}

export default DataNavigator;
