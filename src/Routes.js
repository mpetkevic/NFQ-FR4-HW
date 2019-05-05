import React,{Component,Fragment} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import TopMenu from './components/TopMenu/TopMenu';
import Home from './components/Home/Home';
import MaterialUI from './components/MaterialUI/MaterialUI';
import SemanticUI from './components/SemanticUI/SemanticUI';
import Bootstrap from './components/Boostrap/Bootstrap';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <TopMenu/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/material-ui' component={MaterialUI}/>
            <Route path='/semantic-ui' component={SemanticUI}/>
            <Route path='/bootstrap' component={Bootstrap}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
     );
  }
}

export default Routes;
