import { Routes, Route, BrowserRouter } from "react-router-dom"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import Home from "./components/home/Home"
import Menu from "./components/menu/Menu"
import Nav from './components/nav/Nav'
import About from "./components/about/About"

export default function AdvertApp() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/advert/' element={<Home />} />
        <Route path='/advert/menu' element={<Menu />} />
        <Route path='/advert/about' element={<About />} />
        <Route path='/advert/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
