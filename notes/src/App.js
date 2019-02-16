import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';



import SideView from './components/SideView';
import NotesPreview from './components/NotesPreview';
import CreateNote from './components/CreateNote';
import ViewOneNote from './components/ViewOneNote';
import DeleteNote from './components/DeleteNote';

class App extends Component {
  render() {
    return (
      <div className="App">

        <SideView />          
        <Route
              path={`/create`}
              render={props =>
              <CreateNote {...props} />
            }
          />
        <Route 
              path='/' 
              exact
              render={props => 
              <NotesPreview {...props}/>
            } 
          />
          <Route 
              path="/notes/:id"
              render={props=>
              <ViewOneNote {...props} /> }
          />

            <Route 
              path={`/notes/delete/:id`}
              render={props=>
              <DeleteNote {...props} /> }
              />
 
      </div>
    );
  }
}

export default App;
