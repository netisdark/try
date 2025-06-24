import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import Footer from './components/footer/Footer';
import Home from './components/menu/Home';
import Order from './components/order/Order';
import Bill from './components/bill/Bill';
import History from './components/history/History';
import Account from './components/account/Account';
import GetOrder from './components/order/order.admin';
import './index.css';
export default function App() {
  return (
  <BrowserRouter>
    <CartProvider>
        <Routes>
          <Route path="customer/" element={<Home />} />
          <Route path="/customer/order" element={<Order />} />
          <Route path="/customer/bill" element={<Bill />} />
          <Route path="/customer/history" element={<History />} />
          <Route path="/customer/account" element={<Account />} />
          <Route path="/customer/bill" element={<Bill />} />
          <Route path="admin/orders" element={<GetOrder />} />
        </Routes>
        <Footer />
    </CartProvider>
  </BrowserRouter>
  );
}
