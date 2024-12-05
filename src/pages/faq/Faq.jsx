import Accordion from "../../components/accordion/Accordion";
import SectionHeader from "../../components/sectionHeader/SectionHeader"
import BackedBy from "../../components/backedby/BackedBy";
import "./Faq.css"


const Faq = () => {
  return (
    <div className="faq">
  
        <div className="faq__page-header">
            <h1>FAQ</h1>
        </div>
        <section className="container">
        <SectionHeader 
          title="Frequently Asked Question" 
        />
            <Accordion />
        </section>
        <section>
            <BackedBy />
        </section>
    </div>
  )
}

export default Faq