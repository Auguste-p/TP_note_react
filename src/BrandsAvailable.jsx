// affichant les marques disponibles pour une catégorie donnée (marques pour les lunettes, pour les t shirts)
import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const BrandsAvailable = ({ brands, selectedBrands, onBrandSelect }) => {
  const handleBrandChange = (e) => {
    onBrandSelect(e.value);
  };

  const brandOptions = brands.map((brand) => ({ label: brand, value: brand }));

  return (
    <div className="brand-filter">
      <MultiSelect
        value={selectedBrands}
        options={brandOptions}
        onChange={handleBrandChange}
        optionLabel="label"
        placeholder="Select Brands"
        style={{ width: '100%' }}
        filter
        className="p-multiselect-custom"
      />
    </div>
  );
};

export default BrandsAvailable;