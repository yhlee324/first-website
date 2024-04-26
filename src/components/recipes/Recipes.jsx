import React from 'react';
import './RecipesStyles.css';
import Korean from '../../assets/korean.jpg';
import Chinese from '../../assets/chinese.jpg';
import Indian from '../../assets/indian.jpg';
import Thai from '../../assets/thai.jpg';
import Japanese from '../../assets/japanese.jpg';

function Recipes() {
  return (
    <div className="recipes">
      <div className="container">
        <h1>All the Recipes You Want!</h1>
        <p>Here are some examples:</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Korean} alt="Korean" />
          <img src={Chinese} alt="Chinese" />
          <img src={Indian} alt="Indian" />
          <img src={Thai} alt="Thai" />
          <img src={Japanese} alt="Japanese" />
        </div>
      </div>
    </div>
  );
}

export default Recipes;
