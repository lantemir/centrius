"use client"

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="w-full bg-accent text-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">      

        <Image 
            src="/icons/logo1.svg"
            width={100}
            height={100}
            alt='logo'
            className='max-sm:size-100'
        />


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-primarylight">
            Главная
          </Link>
          <a href="#services" className="hover:text-primarylight">
            Услуги
          </a>
          <a href="#about" className="hover:text-primarylight">
            О нас
          </a>
          <a href="#contact" className="hover:text-primarylight">
            Контакты
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <AiOutlineClose size={24} className="text-primary" />
            ) : (
              <AiOutlineMenu size={24} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-muted text-primarylight">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" onClick={toggleNav}>
              Главная
            </Link>
            <a href="#services" onClick={toggleNav}>
              Услуги
            </a>
            <a href="#about" onClick={toggleNav}>
              О нас
            </a>
            <a href="#contact" onClick={toggleNav}>
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;