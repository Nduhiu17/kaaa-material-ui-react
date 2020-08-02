import React from 'react';
import { Paper } from '@material-ui/core';
import Header from './components/Header'
import MainSlider from './components/main-slider/MainSlider'
import About from './components/About'
import Objectives from './components/Objectives'

function App() {
  return (
    <Paper elevation={10}>
      <Header/>
      <MainSlider />
      <About/>
      <Objectives />
    </Paper>
  );
}

export default App;
