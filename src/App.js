import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import PlacePage from './pages/place/place.page.component';
import HomePage from './pages/homepage/homepage.component';
import GuidePage from './pages/guide/guide.page.component'
import BodyVideo from './components/body/BodyVideo'

class App extends Component {


  render() {
    return (
        <div>
            <Header/>
            <BodyVideo></BodyVideo>

            <Switch>
                <Route exact path='/' component={HomePage}  />
                <Route exact path='/place' component={PlacePage}  />
                <Route exact path='/guide' component={GuidePage}  />

            </Switch>

        </div>
    );
  }
}

export default App;

