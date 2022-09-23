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

function App() {

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />} />

          <Route
            path='/higgginbotham'
            element={<Home />} />

          <Route
            exact
            path='/tree'
            element={<Tree />} />

          <Route
            exact
            path='/docs'
            element={<Docs />} />

          <Route
            exact
            path='/stories'
            element={<Stories />} />

          <Route
            path= '/notes'
            element={<Notes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
