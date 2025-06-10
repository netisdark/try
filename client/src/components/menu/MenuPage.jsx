import { useState } from 'react';
import MenuNav from './MenuNav';
import Menu from './Menu';
import menuItems from './MenuItems';


export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
  const categories = ['All', ...uniqueCategories];

  return (
    <div>
      <MenuNav
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat === 'All' ? null : cat)}
      />

      <Menu selectedCategory={selectedCategory} />
    </div>
  );
}
