import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import NavBar from "../components/navbar";
import Dashboard from "../components/dashboard";
import CommonCriteria from "../components/commonCriteria";
import authService from "../services/authService";
import Requirements from "../components/requirements";
import ScanResults from "../components/ScanResults";

class Home extends Component {
  render() {
    if (!authService.getCurrentUser()) return <Redirect to="/login" />;

    const { user } = this.props;

    return (
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar user={user} />
            <Route path="/commoncriteria" component={CommonCriteria} />
            <Route path="/requirements" component={Requirements} />
            <Route path="/scans" component={ScanResults} />
            <Route path="/" exact component={Dashboard} />
          </div>
          <Footer />
        </div>
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
