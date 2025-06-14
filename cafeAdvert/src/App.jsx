import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"

import Home from "./components/home/Home"
import Nav from './components/nav/Nav'

export default function App(){
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Home/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}