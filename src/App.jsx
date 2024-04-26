import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Recipes from './components/recipes/Recipes';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Recipes />
    </div>
  );
}

export default App;
