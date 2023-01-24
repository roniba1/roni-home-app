import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import ToDoPage from "../../pages/ToDoPage";
import GroceryListPage from "../../pages/GroceryListPage";
import CalendarPage from "../../pages/CalendarPage";
import ForecastPage from "../../pages/ForecastPage";
import { PATHS } from "../../constants/pages/PagesLinks";

/**
 * This component is using for routing in the app and using ReactRouter
 * Switch & Route to do it.
 */
const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path={PATHS.HOME}>
          <LandingPage />
        </Route>
        <Route path={PATHS.TODO}>
          <ToDoPage />
        </Route>
        <Route path={PATHS.GROCERY}>
          <GroceryListPage />
        </Route>
        <Route path={PATHS.CALENDAR}>
          <CalendarPage />
        </Route>
        <Route path={PATHS.FORECAST}>
          <ForecastPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
