import MenuNav from './MenuNav';
import Menu from './Menu';
import menuItems from './MenuItems';
import React, { useState } from 'react';

export default function MenuPage({ searchTerm, setSearchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
  const categories = ['All', ...uniqueCategories];

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat === 'All' ? null : cat);
    setSearchTerm(''); 
  };

  return (
    <div>
      <MenuNav
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <Menu selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
}
