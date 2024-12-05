import './About.css';
import group from "../../images/webgroup.avif"
import DiscountBadge from "../../components/discountBadge/DiscountBadge"
import BackedBy from "../../components/backedby/BackedBy"
import AboutFounder from '../../components/aboutFounder/AboutFounder';
import SectionHeader from "../../components/sectionHeader/SectionHeader"

const About = () => {
  return (
    <div className="about container">
      <section className="about__hero">
      <div className='about__hero-content'>
      <div>
        <h1 className="about__title"> About Moniemate</h1>
        <p className="about__description">
        We at moniemate believe that financial transactions should be secure,
        seamless, and empowering for everyone. In today’s fast-paced digital world,
        the need for safety in financial dealings has never been more critical. That’s
        why we’ve developed innovative solutions designed to protect our customers
        from fraud while making their transactions as easy as possible.
        </p>
        <button className="btn">Get Started</button>
      </div>
      </div>
      <div className="about__image">
        <img src={group} alt="Business owners using Moniemate" />
      </div>
      </section>
      <section className="about__mission">
        <div className="about__image">
          <img src={group} alt="Business owners using Moniemate" />
        </div>
      <div className='about__hero-content'>
      <div>
        <h2 className="about__title"> Our Mission</h2>
        <p className="about__description">
        We at moniemate believe that financial transactions should be secure,
        seamless, and empowering for everyone. In today’s fast-paced digital world,
        the need for safety in financial dealings has never been more critical. That’s
        why we’ve developed innovative solutions designed to protect our customers
        from fraud while making their transactions as easy as possible.
        </p>
      </div>
      </div>
      </section>
      <section>
        <BackedBy/>
      </section>
      <section>
      <SectionHeader 
          title="Our Founder"
        />
        <AboutFounder />
      </section>
      <section>
        <DiscountBadge />
      </section>
    </div>
  );
};

export default About;
