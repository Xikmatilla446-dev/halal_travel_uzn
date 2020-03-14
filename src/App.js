import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import PlacePage from './pages/place/place.page.component';
import HomePage from './pages/homepage/homepage.component';
import GuidePage from './pages/guide/guide.page.component'
import FoodComponent from './components/foods-component/foods-component'
import ScrollButton from './components/ScrollButton/ScrollButton'
class App extends Component {


  render() {
    return (
        <div>
            <Navbar/>

            <Switch>
                <Route exact path='/' component={HomePage}  />
                <Route exact path='/place' component={PlacePage}  />
                <Route exact path='/guide' component={GuidePage}  />
                <Route exact path='/food' component={FoodComponent}  />
            </Switch>
            <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>

        </div>
    );
  }
}

export default App;

