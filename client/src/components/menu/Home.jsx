
import Banner from './Banner';
import MenuNav from './MenuNav';
import Menu from './Menu';
import SearchBox from './SearchBox';

export default function Home() {
  return (
    <div>
      <SearchBox/>
      <Banner />
      <MenuNav />
      <Menu />
    </div>
  );
}
