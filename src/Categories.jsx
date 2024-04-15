// affichant 2 catégories de produit (sunglasses et t-shirts for men)
import React from 'react';

const Categories = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'active' : ''}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;