import React, { useState, useEffect } from 'react';
import './header.css';
import logo from "../../statics/imagenes/cesar-julio-diaz-flores-high-resolution-logo-white.png"

export const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);


  return (
    
    <div className={visible ? 'header' : 'header hide'}>
       <img src={logo} alt="logo" className="logo" />
      <div>
        <button type="button" className="iconos  btn btn-outline-secondary">Certificados</button>
        <button type="button" className="iconos  btn btn-outline-secondary">Proyectos</button>
        <button type="button" className="iconos  btn btn-outline-secondary">about</button>
        <button type="button" className="iconos  btn btn-outline-secondary">contacto</button>
      </div>
     </div>
  )
}
export default Header