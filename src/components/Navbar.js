import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const [blue, setblue] = useState('#0c3353');
  const blueTheme = () => {
    if (blue === '#0c3353') {
      document.body.style.backgroundColor = blue;
      setblue('#fff');
    } else {
      document.body.style.backgroundColor = blue;
      setblue('#0c3353');
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          {props.title}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                {props.aboutText}
              </a>
            </li>
          </ul>
          <div className='mx-2'>
            <button type='button' className='btn btn-info' onClick={blueTheme}>
              Blue Color Theme
            </button>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === 'dark' ? 'light' : 'dark'
            }`}
          >
            <input
              className='form-check-input'
              type='checkbox'
              id='flexSwitchCheckDefault'
              onClick={props.toggleMode}
            />
            <label
              className='form-check-label'
              htmlFor='flexSwitchCheckDefault'
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string,
};
// Navbar.defaultProps = {
//   title: 'type a name here',
//   aboutText: 'about text here',
// };
