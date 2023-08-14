import FAQs from "../../components/FAQs"
import MainHeader from "../../components/MainHeader"
import Programs from "../../components/programs"
import Values from "../../components/Values"
import Testimonials from "../../components/Testimonials"

import "./home.css"

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home
