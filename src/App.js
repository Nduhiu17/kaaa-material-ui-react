import React from 'react';
import { Paper } from '@material-ui/core';
import Header from './components/Header'
import MainSlider from './components/sliders/MainSlider'
import About from './components/About'
import Objectives from './components/Objectives'
import EventsAndMembership from './components/EventsAndMembership'
import Main from './components/gallery/Main'
import Footer from './components/Footer'

function App() {
  return (
    <Paper elevation={10}>
      <Header/>
      <MainSlider />
      <About/>
      <Objectives />
      <EventsAndMembership />
      <Main />
      <Footer/>
    </Paper>
  );
}

export default App;
