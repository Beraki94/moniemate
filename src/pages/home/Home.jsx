import GetStarted from "../../components/gettingStarted/GetStarted"
import Hero from "../../components/hero/Hero"
import SecurityCard from "../../components/securityCard/SecurityCard"
import Testimonial from "../../components/testimonial/Testimonial"
import WhatWeDo from "../../components/whatWeDo/WhatWeDo"
import SectionHeader from "../../components/sectionHeader/SectionHeader"
import "./Home.css"
import DiscountBadge from "../../components/discountBadge/DiscountBadge"
import BackedBy from "../../components/backedby/BackedBy"

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero container">
        <Hero />
      </section>
     
      <section className="home__security container">
        <SecurityCard />
      </section>
      <section>
        <BackedBy />
        </section>
      
      <section className="home__whatwedo">
      <SectionHeader 
          title="What we do"
          className="secondary" 
        />
        <WhatWeDo />
      </section>
      <section className="home__getstarted">
      <SectionHeader 
          title="Get Started With Moniemate" 
        />
        <GetStarted />
      </section>
      <section className="home__discount">
        <DiscountBadge />
      </section>
      <section>
      <SectionHeader 
          title="What people say"
        />
        <Testimonial />
      </section>
    </div>
  )
}

export default Home