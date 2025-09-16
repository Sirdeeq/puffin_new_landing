import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isAboutSidebarOpen, setAboutSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!isSearchOpen);
  };
  
  const handleAboutSidebarToggle = () => {
    setAboutSidebarOpen(!isAboutSidebarOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }
  }, [isSearchOpen]);
  
    useEffect(() => {
    if (isAboutSidebarOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isAboutSidebarOpen]);

  // This is a simplified dropdown handler. A more robust solution
  // might be needed for complex multi-level dropdowns.
  const handleDropdown = (e) => {
    if (window.innerWidth < 992) {
        e.preventDefault();
        const dropdown = e.currentTarget.parentElement;
        dropdown.classList.toggle('open');
        const subMenu = dropdown.querySelector('ul');
        if (subMenu) {
            if (subMenu.style.display === 'block') {
                subMenu.style.display = 'none';
            } else {
                subMenu.style.display = 'block';
            }
        }
    }
  };

  return (
    <>
      <header className={`main-header header-style-one ${isSticky ? 'fixed-header' : ''}`}>
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo-box">
                  <div className="logo"><Link to="/"><img src="/assets/headerLogo2_1.png" alt="" style={{ width: '100px' }} title="Constrc" /></Link></div>
                </div>
                <div className="nav-outer d-flex flex-wrap">
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      <button className="navbar-toggler" type="button" onClick={handleMobileMenuToggle}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation clearfix">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li className="dropdown" >
                          <Link to="#" onClick={handleDropdown}>Subsidiaries</Link>
                          <ul>
                            <li><Link to="/puffin-agro">Puffin Agro-allied</Link></li>
                            <li><Link to="/buildwise">Buildwise Construction</Link></li>
                            <li><Link to="/puffin-energy">Puffin Energy</Link></li>
                            <li><Link to="/laser-shield">Laser Shield</Link></li>
                            <li><Link to="/maz-logistics">Maz Logistics</Link></li>
                            <li><Link to="/swingtide">Swingtide Consulting</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/testimonial">Testimonial</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Main Menu End--> */}
                <div className="outer-box d-flex align-items-center flex-wrap">
                  <div className="search-box-btn search-box-outer" onClick={handleSearchToggle}><span className="icon fa fa-search"></span></div>
                  <div className="main-header_button">
                    <Link to="/contact" className="theme-btn btn-style-three">
                      <span className="btn-wrap">
                        <span className="text-one">Send A Message <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                        <span className="text-two">Click Here <i><img src="/assets/images/icons/arrow-1.svg" alt="" /></i></span>
                      </span>
                    </Link>
                  </div>
                   <span className="about-widget" onClick={handleAboutSidebarToggle}>
                    <span className="hamburger">
                      <span className="top-bun"></span>
                      <span className="meat"></span>
                      <span className="bottom-bun"></span>
                    </span>
                  </span>
                  <div className="mobile-nav-toggler" onClick={handleMobileMenuToggle}><span className="icon fa-classic fa-solid fa-bars fa-fw"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Lower*/}
      </header>

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenuToggle}></div>
        <div className="close-btn" onClick={handleMobileMenuToggle}><span className="icon fa-xmark"></span></div>
        <nav className="menu-box">
          <div className="nav-logo"><Link to="/"><img src="/assets/headerLogo2_1.png" alt="" style={{ width: '35%' }} title="" /></Link></div>
          <div className="menu-outer">
             <ul className="navigation clearfix">
                <li><Link to="/" onClick={handleMobileMenuToggle}>Home</Link></li>
                <li><Link to="/about" onClick={handleMobileMenuToggle}>About</Link></li>
                <li className="dropdown">
                  <Link to="#" onClick={handleDropdown}>Subsidiaries</Link>
                  <ul>
                    <li><Link to="/puffin-agro" onClick={handleMobileMenuToggle}>Puffin Agro-allied</Link></li>
                    <li><Link to="/buildwise" onClick={handleMobileMenuToggle}>Buildwise Construction</Link></li>
                    <li><Link to="/puffin-energy" onClick={handleMobileMenuToggle}>Puffin Energy</Link></li>
                    <li><Link to="/laser-shield" onClick={handleMobileMenuToggle}>Laser Shield</Link></li>
                    <li><Link to="/maz-logistics" onClick={handleMobileMenuToggle}>Maz Logistics</Link></li>
                    <li><Link to="/swingtide" onClick={handleMobileMenuToggle}>Swingtide Consulting</Link></li>
                  </ul>
                </li>
                <li><Link to="/testimonial" onClick={handleMobileMenuToggle}>Testimonial</Link></li>
                <li><Link to="/contact" onClick={handleMobileMenuToggle}>Contact</Link></li>
              </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      
      {/* Search Popup */}
      <div className="search-popup">
        <div className="color-layer"></div>
        <button className="close-search" onClick={handleSearchToggle}><span className="fa-xmark"></span></button>
        <form method="post" action="blog.html">
          <div className="form-group">
            <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required="" />
            <button className="fa fa-solid fa-magnifying-glass fa-fw" type="submit"></button>
          </div>
        </form>
      </div>
      {/* End Search Popup */}
      
            {/* About Sidebar */}
      <div className={`about-sidebar ${isAboutSidebarOpen ? 'active' : ''}`}>
        <div className="gradient-layer" onClick={handleAboutSidebarToggle}></div>
        {/* Close Button */}
        <div className="close-sidebar-widget close-button" onClick={handleAboutSidebarToggle}>
          <span className="fa-solid fa-xmark fa-fw"></span>
        </div>
        <div className="sidebar-inner">
          <div className="upper-box">
            <div className="image">
              <img src="/assets/photos/3.jpg" alt="" />
            </div>
            <div className="content-box">
              <h3>About <span>Puffin Group</span></h3>
              <div className="text">At Puffin, we are a multi-industry business group delivering exceptional services across Agro-Allied, Construction, Energy, Consulting, Logistics, Export & Import sectors. Through our subsidiaries, we are committed to positively impacting lives and the environment with smart, innovative, and timely solutions.</div>
            </div>
          </div>
          {/* Social Box */}
          <div className="social-box">
            <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      {/* End About Sidebar */}
    </>
  );
};

export default Header;
