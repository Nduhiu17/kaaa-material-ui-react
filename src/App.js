import React from 'react';
import { Paper } from '@material-ui/core';
import Header from './components/Header'
import MainSlider from './components/main-slider/MainSlider'
import About from './components/About'

function App() {
  return (
    <Paper>
      <Header/>
      <MainSlider />
      <About/>
    </Paper>
  );
}

export default App;
