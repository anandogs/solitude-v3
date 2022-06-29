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
      <div className="bg-primary-brand w-[100%] h-[4.4375rem] flex items-center justify-between px-[1.5625rem] lg:px-[5.375rem]">
          <Link href='https://solitude.farm/'>
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
          <div className='hidden uppercase lg:flex gap-[3.25rem] text-white cursor-pointer'>
              <Link href='https://solitude.farm/about-us-v1/'><h4 className='text-white cursor-pointer'>Farm</h4></Link>
              <Link href='https://solitude.farm/product-category/cafe-menu/'><h4 className='text-white cursor-pointer'>Cafe</h4></Link>
              <Link href='https://solitude.farm/product/3-day-intensive-permaculture-workshop/'><h4 className='text-white cursor-pointer'>Education</h4></Link>
              <Link href='https://open.spotify.com/artist/0aAx4OnUwPhnbvsSu9O6Up'><h4 className='text-white cursor-pointer'>Music</h4></Link>
              <Link href='/'>
              <h4 className='text-white cursor-pointer'>365 Days</h4>
              </Link>
              <Link href='mailto:solitudepermaculture@gmail.com'>
              <h4 className='text-white'>Contact</h4>
              </Link>
          </div>
      </div>
      {isOpen ? 
      <div className="lg:hidden">
      <Link href='https://solitude.farm/about-us-v1/'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">Farm</h3></Link>
      <Link href='https://solitude.farm/product-category/cafe-menu/'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">Cafe</h3></Link>
      <Link href='https://solitude.farm/product/3-day-intensive-permaculture-workshop/'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">Education</h3></Link>
      <Link href='https://open.spotify.com/artist/0aAx4OnUwPhnbvsSu9O6Up'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">Music</h3></Link>
      <Link href='/'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">365 Days</h3></Link>
      <Link href='mailto:solitudepermaculture@gmail.com'><h3 className="px-[1.5rem] py-[1.1875rem] border-b-[1.5px] border-dark-grey cursor-pointer">Contact Us</h3></Link>
      </div>  
    :
    null
    }
    
      </div>
  );
};

export default Header;
