import React, { useState } from 'react';
import axios from 'axios';
import '../style/inputsearcher.css'
import { APP_ID, APP_KEY } from '../constants/credentials';

export const InputSearcher = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const searchRecipes = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
      const response = await axios.get(url);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching the recipes:', error);
    }
  };
  
  const handleInputChange = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const url = `https://api.edamam.com/auto-complete?q=${e.target.value}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      try {
        const response = await axios.get(url);
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching the suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    searchRecipes();
  };

  return (
    <div className="input-searcher">
    <div className="input-wrapper">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search recipes..."
      />
      <button onClick={searchRecipes}>Search</button>
    </div>
    {suggestions.length > 0 && (
      <div className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="suggestion-item"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </div>
        ))}
      </div>
    )}
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
