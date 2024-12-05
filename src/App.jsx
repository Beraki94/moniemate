
import { Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ScrollToTop from 'react-scroll-to-top'
import ScanQprCard from './components/scanQPR/ScanQprCard'
import TagTopay from './pages/tagTopay/TagTopay'
import TapTopay from './pages/tapTopay/TapTopay'
import Faq from './pages/faq/Faq'
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Shop from "./pages/shop/Shop"







function App() {

  return (
   <div>
    <Header />
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/tagtopay" element={<TagTopay/>} />
      <Route path="/taptopay"  element={<TapTopay/>} />
      <Route path="company">
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
      </Route>
    </Routes>
    <ScanQprCard />
    <ScrollToTop smooth />
    <Footer />
   </div>
  )
}

export default App
