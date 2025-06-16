import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Tables from './components/tables/Tables';


export default function App() {
  return (
    <div style={{
      padding: '1vh',
      gap: '1vh',
      height: '100vh',
      display: 'flex'
      }}>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Tables/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}