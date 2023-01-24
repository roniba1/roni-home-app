import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import ToDoPage from "../../pages/ToDoPage";
import GroceryListPage from "../../pages/GroceryListPage";
import CalendarPage from "../../pages/CalendarPage";
import ForecastPage from "../../pages/ForecastPage";

/**
 * This component is using for routing in the app and using ReactRouter
 * Switch & Route to do it.
 */
const Routes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/todoList">
          <ToDoPage />
        </Route>
        <Route path="/groceryList">
          <GroceryListPage />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/forecast">
          <ForecastPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
