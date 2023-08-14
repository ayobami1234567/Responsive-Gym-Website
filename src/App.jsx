import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Gallery from "./pages/gallery/gallery"
import Plans from "./pages/plans/plans"
import Trainers from "./pages/trainers/trainers"
import NotFound from "./pages/notFound/notFound"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="plans" element={<Plans />}></Route>
        <Route path="trainers" element={<Trainers />}></Route>
        <Route path="notFound" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
