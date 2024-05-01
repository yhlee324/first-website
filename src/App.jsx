import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Interests from './components/interests/Interests';
import About from './components/about/About';
import Goals from './components/goals/Goals';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Goals />
    </div>
  );
}

export default App;
