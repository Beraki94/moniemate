import './SectionHeader.css';

const SectionHeader = ({ title, className}) => {
  return (
    <div className={`section-header ${className}`}>
      <h2 className='section-header__title'>{title}</h2>
    </div>
  );
};

export default SectionHeader;
