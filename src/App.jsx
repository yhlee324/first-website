import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Interests from './components/interests/Interests';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Interests />
    </div>
  );
}

export default App;
