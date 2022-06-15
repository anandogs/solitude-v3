import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import logo from '../../public/logo.png'
import closedBurger from '../../public/burger_closed.png'
import openBurger from '../../public/burger_open.png'
import { useState } from "react";



// Add props
const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-primary-brand w-screen h-[4.4375rem] flex items-center justify-between px-[1.5625rem] lg:px-[5.375rem]">
          <Link href='/'>
          <Image
        alt='Logo of Solitude Farm'
        src={logo}
        width="49px"
        height="44px"
        objectFit="contain"
        className="cursor-pointer"
      />
      </Link>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
      <Image
        alt='Burger'
        src={isOpen? openBurger : closedBurger}
        width="48px"
        height="48px"
        objectFit="contain"
        className="cursor-pointer"
      />
      </div>
          <div className='hidden uppercase lg:flex gap-[3.25rem] text-white'>
              <h4 className='text-white'>Farm</h4>
              <h4 className='text-white'>Cafe</h4>
              <h4 className='text-white'>Education</h4>
              <h4 className='text-white'>Music</h4>
              <Link href='/blog'>
              <h4 className='text-white cursor-pointer'>365 Days</h4>
              </Link>
              <h4 className='text-white'>Contact</h4>
          </div>
      </div>
      {isOpen ? 
      <div className="lg:hidden">
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">Farm</h3>
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">Cafe</h3>
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">Education</h3>
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">Music</h3>
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">365 Days</h3>
      <h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey">Contact Us</h3>
      </div>  
    :
    null
    }
    
      </div>
  );
};

export default Header;
