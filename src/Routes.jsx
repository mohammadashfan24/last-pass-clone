import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { EXAMPLES, HOME, LOGIN, REGISTER, NOT_FOUND } from "./constants/routes";
import ExamplesContainer from "./containers/ExamplesContainer";
import HomeContainer from "./containers/HomeContainer";
import AuthenticationContainer from "./containers/AuthenticationContainer";
import LastPassNotFound from "./components/LastPassNotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const Routes = () => {
  return (
    <Router>
      <div className="app__main">
        <Switch>
          <Route
            path={LOGIN}
            exact
            component={props => <AuthenticationContainer {...props} />}
          />

          <Route
            path={REGISTER}
            exact
            component={props => <AuthenticationContainer {...props} />}
          />

          <Route
            path={NOT_FOUND}
            exact
            component={props => <LastPassNotFound {...props} />}
          />

          <ProtectedRoute path={EXAMPLES} component={ExamplesContainer} />

          <ProtectedRoute path={HOME} component={HomeContainer} />

          <Redirect to={NOT_FOUND} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
