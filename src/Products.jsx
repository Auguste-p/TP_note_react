// affichant la liste de tous les produits par catégorie (les sunglasses, les t shirts)
import React, { useState } from 'react';
import Categories from './Categories';
import BrandsAvailable from './BrandsAvailable';
import Product from './Product';
import axios from 'axios';

const Products = ({  }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [products, setProducts] = useState([]);

  // Fetch products from API endpoint
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/"
      );
      setProducts(response.data.products); // Update products state with fetched data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useState(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once


  // Extract unique categories and brands from products
  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];

  // Filter products based on selected category and brands
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleBrandSelect = (selectedOptions) => {
    setSelectedBrands(selectedOptions);
  };

  return (
    <div className="products">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <BrandsAvailable brands={brands} selectedBrands={selectedBrands} onBrandSelect={handleBrandSelect} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
