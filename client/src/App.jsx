import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/menu/Banner';
import Footer from './components/menu/Footer';

import Home from './components/menu/Menu';
import Nav from './components/menu/Nav';
import MenuNav from './components/menu/MenuNav'
export default function App(){
  return (
    <BrowserRouter>
     <Nav/>
     <Banner/>
     <MenuNav/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}