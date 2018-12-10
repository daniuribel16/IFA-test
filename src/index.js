import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Empty from './components/empty/EmptyComponent';
import Billing from './components/billing/BillingComponent';
$('[data-toggle="tooltip"]').tooltip();

let app = document.getElementById('root');


ReactDOM.render(
<Router>
    <div>
      <Route path="/"  component={App}></Route>
      <Route path="/billing" component={Billing}></Route>
      <Route path="/empty" component={Empty}></Route>
    </div>
</Router>, app);

