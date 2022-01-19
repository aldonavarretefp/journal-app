import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/Main/JournalScreen';

export const AppRouter = () => {
  return <div>
      <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter} />
                <Route exact path="/" component={JournalScreen} />
            </Switch>
        </Router>
  </div>;
};
