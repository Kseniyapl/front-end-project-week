import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import CreateNote from './components/CreateNote';
import SideView from './components/SideView';
import Notes from './components/Notes';


class App extends Component {
  render() {
    return (
      <div className="App">

        <SideView />          
        <Notes />
        <Route
          path={`/create`} render={props =>
          <CreateNote {...props} refresh={this.refresh}/>
        }
        />

      </div>
    );
  }
}

export default App;
