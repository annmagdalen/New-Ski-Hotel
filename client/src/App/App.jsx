import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_routes';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { Container, theme } from '../theme';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
          <ThemeProvider theme={theme}>
            <Container>
              <div className="jumbotron">
                  <div className="container">
                      <div className="col-sm-8 col-sm-offset-2">
                          {alert.message &&
                              <div className={`alert ${alert.type}`}>{alert.message}</div>
                          }
                          <Router history={history}>
                              <div>
                                  <PrivateRoute exact path="/" component={HomePage} />
                                  <Route path="/login" component={LoginPage} />
                                  <Route path="/register" component={RegisterPage} />
                              </div>
                          </Router>
                      </div>
                  </div>
              </div>
            </Container>
          </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };