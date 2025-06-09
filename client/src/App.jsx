import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';

import Home from './components/Home';
import Nav from './components/Nav';

export default function App(){
  return (
    <BrowserRouter>
     <Nav/>
     <Banner/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}