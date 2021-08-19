import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Demographic from "./pages/Demographic";
import Loan from "./pages/Loan";
import Applicant from './pages/Applicant';

import { URL } from "./utilities/constants";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={URL.DASHBOARD} component={Dashboard} />
                <Route exact path={URL.DEMOGRAPHICS} component={Demographic} />
                <Route exact path={URL.LOANS} component={Loan} />
                <Route exact path={URL.APPLICANTS} component={Applicant} />
            </Switch>
        </Router>
    );
};

export default Routes;
