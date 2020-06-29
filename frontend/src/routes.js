import React from 'react';
import { Router, Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import test from './test';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Router>
    <IndexRoute component={test} />
  </Route>
);