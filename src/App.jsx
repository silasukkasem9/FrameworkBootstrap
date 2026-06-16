import React from 'react';
import FoodCard from './components/FoodCard';
import { foods } from './data/foods';
import './App.css';

/**
 * App Component
 * 
 * This is the main entry point for our Favorite Foods application.
 * It renders a responsive grid layout containing all our food cards.
 */
const App = () => {
  return (
    <div className="app-container min-vh-100 py-5">
      <div className="container">

        {/* --- Header Section --- */}
        <div className="text-center mb-5 mt-3">
          <h1 className="display-4 fw-bold text-dark mb-3">Our Favorite Foods</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover our carefully curated selection of mouthwatering Thai dishes,
            prepared with authentic ingredients and traditional recipes.
          </p>
        </div>

        {/* --- Food Cards Grid --- */}
        <div className="row g-4">
          {/* We iterate over our foods array and generate a FoodCard for each item */}
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default App;
//Why'd you look at this T.Chanon