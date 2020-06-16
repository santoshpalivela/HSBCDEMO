import * as React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./types/routes";
toast.configure();

export const App = () => {
  const isUserLoggedIn = () => {
    if (sessionStorage.getItem("username")) return true;
    else return false;
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) =>
            route.isPrivateRoute ? (
              <PrivateRoute
                exact={true}
                path={route.path}
                component={route.component}
                key={index}
              />
            ) : (
              <Route
                path={route.path}
                component={route.component}
                exact={true}
                key={index}
              />
            )
          )}
          <Route path="/" render={() => <Redirect to="/login" />} />

        </Switch>
      </BrowserRouter>
    </>
  );
};
