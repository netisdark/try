import Banner from './Banner';
import MenuPage from './MenuPage';
import SearchBox from './SearchBox';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTable } from '../TableContexts';
  

export default function Home() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tableFromUrl = query.get('table');

  const { setTable } = useTable();

  useEffect(() => {
    if (tableFromUrl) {
      setTable(tableFromUrl);
    }
  }, [tableFromUrl, setTable]);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBox onSearch={setSearchTerm} />
      <Banner />
      <MenuPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}
