import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  // const [showSearchForm, setShowSearchForm] = useState(false);




  // console.log(scrolling)
  // const handleNavigate = (path) => {
  //   navigate(path)
  // }


  // function toggleSearchForm() {
  //   setShowSearchForm(!showSearchForm);

  // }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setScrolled(true);
        setScrolling(true);
      } else if (scrollTop <= 100) {
        setScrolled(false);
        setScrolling(true);
      }
      setTimeout(() => {
        setScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navStyle = scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar;

  return (
    <div className={styles.navbar}>
      <div className={navStyle}>
        <Link
          className={styles.brand}
          to='/'
        >
          Movie App
        </Link>
        <Link to='/search'>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
