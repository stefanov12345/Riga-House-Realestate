import React, { useState } from "react";
import './Header.css'
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
 const [menuOpened, setMenuOpened] = useState(false);

 const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return { right: !menuOpened && "-100%"}
    }
 }

 return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings h-container'>
            <img src= "./logo.png" alt='logo' width={100}/>
            <OutsideClickHandler>
            <div className='flexCenter h-menu'
              style={getMenuStyle(menuOpened)}
              >
                <a href=''>Residencies </a>
                <a href=''>Our Value</a>
                <a href=''>Contacts Us</a>
                <a href=''>Get Started</a>
                <button className='button'>
                <a href=''>Conctacts</a>
                </button>
                
            </div>
              </OutsideClickHandler>
            <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev)=>!prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
        </div>
        
    </section>
 )
}

export default Header