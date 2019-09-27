import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectsActions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Spinner from "../common/Spinner";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import Dashboard from "./MainContent/Dashboard";
import Account from "./MainContent/Account/Account";
import Tasks from "./MainContent/Tasks";
import Project from "./MainContent/Project/Project";
import NotFound from "../404/404";
import "./Layout.scss";
class Layout extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { projects, projectsLoading } = this.props.projects;
    let dashboardContent;
    if (projects === null || projectsLoading) {
      dashboardContent = <Spinner />;
    } else if (projects.length > 0) {
      dashboardContent = (
        <>
          <SideNav projects={projects} />
          <div className="right">
            <TopNav />
            <Switch>
              <Route
                exact
                path="/dashboard"
                projects={projects}
                component={Dashboard}
              />
              <Route exact path="/account" component={Account} />
              <Route
                exact
                path="/tasks"
                projects={projects}
                component={Tasks}
              />
              <Route exact path="/projects/:project" component={Project} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      );
    } else {
      dashboardContent = (
        <>
          <SideNav />
          <div className="right">
            <TopNav />
            <Switch>
              <Route
                exact
                path="/dashboard"
                projects={[]}
                component={Dashboard}
              />
              <Route exact path="/tasks" component={Tasks} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </>
      );
    }
    return (
      <Router>
        <div className="wrapper">
          {dashboardContent}
          <div className="footer">
            <div className="footer-copy">
              <h1>Copyright 2019 &copy; CARDDEX</h1>
              <p>Информация на сайте не является публичной офертой</p>
            </div>
            <div className="footer-phone">
              <img src="../../img/call.png" alt="" />
              <div className="footer-phone__number">
                <h1>8 (800) 333-93-36</h1>
                <h1>8 (499) 64-333-69</h1>
              </div>
            </div>
            <div className="footer-email">
              <img src="../../img/email.png" alt="" />
              <h1>help@carddex.ru</h1>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
Layout.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  projects: state.projects
});
export default withRouter(
  connect(
    mapStateToProps,
    { getProjects }
  )(Layout)
);
