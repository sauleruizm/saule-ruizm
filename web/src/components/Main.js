import React from 'react';
import { useIntl } from 'react-intl';
import { FaHeart, FaBars } from 'react-icons/fa';
// import reactLogo from '../assets/logo.svg';
import csharpLogo from '../assets/c-sharp.svg';
import jsLogo from '../assets/js.svg';

// import Switch from 'react-switch';

const Main = ({
  collapsed,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleImageChange,
}) => {

  const intl = useIntl();

  return (
    <main>
      <div className='btn-toggle' onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          {/* <img width={80} src={reactLogo} alt="react logo" />  */}
          <img width={80} src={csharpLogo} alt="csharp logo" />
          <img width={40} src={jsLogo} alt="js logo" />

          {intl.formatMessage({ id: 'title' })}
          
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p>
        {/* <div className="social-bagdes">
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
            />
          </a>
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/sauleruizm/react-pro-sidebar?style=social"
            />
          </a>
        </div> */}
      </header>
      {/* <div className='block'>
        <Switch 
        height={16}
        width={30}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={handleImageChange}
        checked={image}
        onColor="#219de9"
        offColor="#bbbbbb"/>
        <span> {intl.formatMessage({ id: 'image' })}</span>
      </div> */}

      <footer>
        <small>
          © {new Date().getFullYear()} made with <FaHeart style={{ color: 'red' }} /> by -{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sauleruizm">
            Saúl Ruíz
          </a>
        </small>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com/sauleruizm" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/sauleruizm?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/sauleruizm" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/sauleruizm?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>

  );

}

export default Main;