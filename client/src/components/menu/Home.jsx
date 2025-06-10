
import Banner from './Banner';
import MenuNav from './MenuNav';
import Menu from './Menu';
import SearchBox from './SearchBox';
import MenuPage from './MenuPage';

export default function Home() {
  return (
    <div>
      <SearchBox/>
      <Banner />
      <MenuNav />
      <MenuPage/>
    </div>
  );
}
