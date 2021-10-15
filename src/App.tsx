import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Nav/>
      <Main/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
