import React from "react";
import Config from "../../../Config/Config";
import { Switch, Route, Redirect } from "react-router-dom";
import UniversitiesNavigator from "./UniversitiesNavigator/UniversitiesNavigator";
import CoursesNavigator from "./CoursesNavigator/CoursesNavigator";
import ChooseNavigator from "./ChooseNavigator/ChooseNavigator";
import RecentSearches from "./RecentSearches/RecentSearches";
import Profile from "./Profile/Profile";

function DataNavigator() {
  return (
    <div className="DataNavigator w-100 h-100">
      <Switch>
        <Route exact path={Config.NAVIGATOR_PATH} component={ChooseNavigator} />

        <Route exact path={Config.UNI_PATH} component={UniversitiesNavigator} />
        <Route exact path={Config.COURSE_PATH} component={CoursesNavigator} />

        <Route exact path={Config.RECENT_PATH} component={RecentSearches} />
        <Route exact path={Config.PROFILE_PATH} component={Profile} />

        {/* THIS IS THE DEFAULT ROUTE*/}
        <Route render={() => <Redirect to={Config.NAVIGATOR_PATH} />} />
      </Switch>
    </div>
  );
}

export default DataNavigator;
