import React from 'react';
import icon from '../assets/icons/icon.svg';
import { FaHome } from 'react-icons/fa';
import Modal from './Modal';
import { NavLink, useLocation } from 'react-router-dom';
// import './BackgroundVideo.css';

type IHeader = {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<IHeader> = ({ theme, setTheme }) => {
  const [burger, setBurger] = React.useState<boolean>(false);
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const location = useLocation();

  const getPath = () => {
    if (location.pathname === '/') {
      return 'Home';
    } else {
      const firstLetter = location.pathname.charAt(1).toUpperCase();
      return firstLetter + location.pathname.substring(2);
    }
  };

  return (
    <div >
      <div>
        <header className={theme ? 'dark sticky top-0' : 'sticky top-0'}>
          <div className={theme ? 'dark:bg-[#1F2937] bg-[#fefefe] drop-shadow-md' : 'bg-[#fefefe] drop-shadow-md'}>
            {/* <div className="flex items-center min-w-[160px]">
              <NavLink to="/">
                <img className="mr-6 h-10" alt="" />
              </NavLink>
              <span className="font-bold text-xl dark:text-white text-gray-800 dark:border-gray-200 block lg:hidden">
                {getPath()}
              </span>
            </div> */}
          </div>
          {/* Modal remains if needed */}
          <Modal theme={theme} isVisible={isVisible} setVisible={setVisible} />
        </header>
      </div>
    </div>
  );
};
