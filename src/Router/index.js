import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Auth/login";
import Signup from "../Auth/signup";
import Admin from "../Screens/admin";
import Company from "../Screens/company";
import Student from "../Screens/student";
import Jobs from "../Screens/jobs";
import Students from "../Screens/viewStudents";
import AllJobs from '../Screens/allJob';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/job">
          <AllJobs />
        </Route>
      </Switch>
    </Router>
  );
}
export default Routers;
