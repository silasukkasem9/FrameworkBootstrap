import React from 'react';

/**
 * FoodCard Component
 * 
 * Renders an individual food item inside a styled Bootstrap card.
 * Expects a 'food' object prop containing id, name, description, image, price, and rating.
 * Also expects an optional 'onOrder' function prop to handle button clicks.
 */
const FoodCard = ({ food, onOrder }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0 food-card">
        
        {/* --- Card Image and Rating Badge --- */}
        <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
          <img 
            src={food.image} 
            className="card-img-top w-100 h-100 food-img" 
            alt={`Delicious ${food.name}`} 
          />
          
          {/* Star rating badge floating on top right of the image */}
          <div 
            className="position-absolute top-0 end-0 m-3 bg-white px-2 py-1 rounded-pill shadow-sm text-dark fw-bold" 
            style={{ fontSize: '0.85rem' }}
          >
            <span className="text-warning">★</span> {food.rating}
          </div>
        </div>
        
        {/* --- Card Content Details --- */}
        <div className="card-body d-flex flex-column p-4">
          
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h4 className="card-title mb-0 fw-bold">{food.name}</h4>
            <span className="text-success fw-bold fs-5 ms-2">{food.price}</span>
          </div>
          
          <p className="card-text text-muted flex-grow-1 mt-2 mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            {food.description}
          </p>

          {/* We use .map() here again to iterate over our new 'tags' array and render badges */}
          <div className="d-flex flex-wrap gap-1 mb-4">
            {food.tags && food.tags.map((tag, index) => (
              <span key={index} className="badge bg-light text-secondary border border-secondary-subtle">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Call to action button with onClick using our 'onOrder' prop */}
          <button 
            className="btn btn-primary w-100 mt-auto fw-semibold rounded-pill py-2 text-uppercase" 
            style={{ letterSpacing: '1px' }}
            onClick={() => onOrder && onOrder(food.name)}
          >
            Order Now
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default FoodCard;