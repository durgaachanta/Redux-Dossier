import React, { Component } from 'react';
import { connect } from 'react-redux';
//Route is the most important bulding block - this is the one which renders the content depending on the path
//If the route in the url matches the path props in the <Route> component - it will render the what is in the component props
//props - exact - use it when you want to match the exact path
//<Switch> component is used to group the routes
//Our application needs a way to navigate between pages - if i use <a> tags it will reload the whole page - <link> is a react router component
//<Link> when clicked on link - the url will change - respective component will render with out reloading the pages
//<Link> - to props - defines the location we should navigate to
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import Registration from './registration';
import Summary from './summary';
//import './App.css';
//Initally this was a regural react app - Now I will be changing this to a react-redux app
//Since I have changed it - I need to connect my component

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="bg-black padding-medium">
          <ul className="tabs ghost">
            <li className="tab-title active"><button>Registration</button></li>
            <li className="tab-title"><button>Summary</button></li>
          </ul>
      </div> */}
        <header>
          <nav>
            <div className="bg-black padding-medium">
              <ul className="tabs ghost">
                <li className="tab-title"><Link to='/'>Home</Link></li>
                <li className="tab-title"><Link to='/registration'>Registration</Link></li>
                <li className="tab-title"><Link to='/summary'>Summary</Link></li>
              </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/registration' component={() => (<h1>This is Durga registration page</h1>)}/> */}
          <Route path='/registration' component={Registration} />
          <Route path='/summary' component={Summary} />
        </Switch>
      </div>
    );
  }
}

//export default App;
//As soon as I added redux to my application - routing got messed up
//Added {pure:false} inside the connect - I don't know why this fixed - below link has info
// https://github.com/ReactTraining/react-router/issues/3536
export default connect(null, null, null, { pure: false })(App);
