import React, { Component } from 'react';
import Hit from './components/hit';
import Header from './components/header';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <Header />
      <Hit />
      </>
     );
  }
}

export default App;