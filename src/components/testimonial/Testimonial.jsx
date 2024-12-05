// Testimonial.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { testimonials } from '../../data';
import './Testimonial.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // No arrows for a cleaner look
  };

  return (
    <div className="testimonial-section">
      <Slider {...settings}>
        {testimonials.map(({ id, text, image, name }) => (
          <div className="testimonial__card-wrapper" key={id}>
            <div className="testimonial__card">
              <div className="testimonial__profile">
                <img src={image} alt={name} className="testimonial__image" />
              </div>
              <p className="testimonial__text">"{text}"</p>
              <p className="testimonial__name">{name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
