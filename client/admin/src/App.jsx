import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Dashboard from './components/dashboard/Dashboard';
import Account from './components/account/Account';
import Payments from './components/payments/Payments';

export default function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      backgroundColor : '#eeeeee'
      }}>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/payments" element={<Payments/>} />
        <Route path="/admin/account" element={<Account/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}