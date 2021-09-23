import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from "antd";

import { NavBar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails} from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>

      <div className="footer">
        <Typography.Title level={5} style={{color: 'white'}}>
          Copyright <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
