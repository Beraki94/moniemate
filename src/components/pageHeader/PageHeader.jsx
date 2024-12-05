import './PageHeader.css';

const PageHeader = ({ title, subTitle, textAlign, btnText = "center" }) => {
  return (
    <header className="page-header">
        <div className={`page-header__content page-header__content--${textAlign}`}>
          <h1 className="page-header__title">{title}</h1>
          <p className="page-header__description">{subTitle}</p>
        </div>
        <button className='btn'>{btnText}</button>
    </header>
  );
};

export default PageHeader;
