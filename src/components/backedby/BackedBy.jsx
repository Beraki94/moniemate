
import './BackedBy.css';
import paypalLogo from '../../images/Interswitch_logo.svg';  // replace with actual image paths
import postOfficeLogo from '../../images/Interswitch_logo.svg';
import monevoLogo from '../../images/Interswitch_logo.svg';
import payPointLogo from '../../images/Interswitch_logo.svg';
import paysafeLogo from '../../images/Interswitch_logo.svg';
import aviosLogo from '../../images/Interswitch_logo.svg';


const BackedBy = () => {
  const partners = [
    { id: 1, logo: paypalLogo, alt: 'PayPal' },
    { id: 2, logo: postOfficeLogo, alt: 'Post Office' },
    { id: 3, logo: monevoLogo, alt: 'Monevo' },
    { id: 4, logo: payPointLogo, alt: 'PayPoint' },
    { id: 5, logo: paysafeLogo, alt: 'Paysafe' },
    { id: 6, logo: aviosLogo, alt: 'Avios' },
  ];

  return (
    <section className="backedby">
      <div className="backedby__content">
        <h3 className="backedby__title">Trusted by</h3>
        <span className="backedby__divider" />
        <div className="backedby__logos">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
              className="backedby__logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
