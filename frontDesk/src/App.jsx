import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Tables from './components/tables/Tables';
import Orders from './components/orders/Orders'
import Bill from './components/bill/Bill'
import Menu from './components/menu/Menu'

export default function App() {
  return (
    <div style={{
      padding: '2vh',
      gap: '2vh',
      height: '100vh',
      display: 'flex'
      }}>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Tables/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/bill" element={<Bill/>} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}