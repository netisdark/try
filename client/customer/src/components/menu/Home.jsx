import Banner from './Banner';
import MenuPage from './MenuPage';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function Home() {
  
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBox onSearch={setSearchTerm} />
      <Banner />
      <MenuPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}
