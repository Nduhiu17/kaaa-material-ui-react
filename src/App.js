import React from 'react';
import Header from './components/Header'
import MainSlider from './components/main-slider/MainSlider'
import { Paper } from '@material-ui/core';

function App() {
  return (
    <Paper>
      <Header/>
      <MainSlider />
    </Paper>
  );
}

export default App;
