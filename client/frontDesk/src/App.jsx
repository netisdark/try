import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Tables from './components/tables/Tables';
import Orders from './components/orders/Orders'
import Bill from './components/bill/Bill'
import Menu from './components/menu/Menu'
import Payments from './components/payments/Payments';

export default function FrontdeskApp() {
  return (
  <BrowserRouter>
    <div style={{
      height: '100vh',
      display: 'flex',
      backgroundColor : '#eeeeee'
      }}>
    <Nav/>
      <Routes>
        <Route path="/frontdesk/tables" element={<Tables/>} />
        <Route path="/frontdesk/orders" element={<Orders/>} />
        <Route path="/frontdesk/bill" element={<Bill/>} />
        <Route path="/frontdesk/menu" element={<Menu/>} />
        <Route path="/frontdesk/payments" element={<Payments/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}