import React from 'react';
import './App.css';
import { Table } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import PeopleList from './components/PeopleList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div style={{ maxWidth: 400}}>
        <Table celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>
                Eye Color
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <PeopleList />
          </Table.Body>

        </Table>
      </div>
    </div>
  );
}

export default App;
