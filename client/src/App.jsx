import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/menu/Banner';
import Footer from './components/footer/Footer';

import Home from './components/menu/Menu';
import Nav from './components/nav/Nav';
import MenuNav from './components/menu/MenuNav';
import Order from './components/order/Order';
import Bill from './components/bill/Bill';
import History from './components/history/History';
import Account from './components/account/Account';



export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Banner />
      <MenuNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
        <Route path="bill" element={<Bill />} />
        <Route path="history" element={<History />} />
        <Route path="account" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
