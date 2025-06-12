import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';

import Footer from './components/footer/Footer';
import Home from './components/menu/Home';
import Order from './components/order/Order';
import Bill from './components/bill/Bill';
import History from './components/history/History';
import Account from './components/account/Account';
import Dashboard from './components/dashboard/dashboard';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="bill" element={<Bill />} />
          <Route path="history" element={<History />} />
          <Route path="account" element={<Account />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
