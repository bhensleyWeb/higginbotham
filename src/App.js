import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Home';
import Tree from './pages/Tree';
import Docs from './pages/Docs';
import Stories from './pages/Stories';
import Notes from './pages/Notes';
import './App.css';
import Land from './pages/Land';

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route
            exact
            path='/higginbotham/'
            element={<Home />} />

          <Route
            exact
            path='/higginbotham/tree'
            element={<Tree />} />

          <Route
            exact
            path='/higginbotham/docs'
            element={<Docs />} />

<Route
            exact
            path='/higginbotham/stories'
            element={<Stories />} />          
        <Route
            exact
            path='/higginbotham/land'
            element={<Land />} />

          <Route
            path= '/higginbotham/notes'
            element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
