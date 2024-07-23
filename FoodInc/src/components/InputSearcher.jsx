import React, { useState } from 'react';
import axios from 'axios';
import '../style/inputsearcher.css';
import '../style/inputsearcher.css'

export const InputSearcher = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const appId = '73dac63d'; 
    const appKey = 'd1028008b4d4b93db076b80a86b7a54d'; 
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching the recipes:', error);
    }
  };

  return (
    <div className="input-searcher">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button onClick={searchRecipes}>Search</button>
      <div className="recipes-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.source}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
};

