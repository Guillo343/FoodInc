import axios from 'axios';
import React, { useState } from 'react'

export const RecipeSearch = () => {

    const [recipe, setRecipe] = useState([]);
    const [query, setQuery] = useState('');

    const searchRecipes = async () =>{
        const appId = '73dac63d';
        const appKey = 'd1028008b4d4b93db076b80a86b7a54d';
        const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}';

        try {
            const respose = await axios.get(url);
            setRecipe(response.data.hits);
        } catch (error) {
            console.log('Error fetching the data', error)
        }
    };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes"
      />
      <button onClick={searchRecipes}>Search</button>
      <ul>
        {recipe.map((recipe, index) => (
          <li key={index}>{recipe.recipe.label}</li>
        ))}
      </ul>
    </div>
  )
}
