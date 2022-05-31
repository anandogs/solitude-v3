import Image from "next/image";
import { FunctionComponent } from "react";
import logo from '../../public/logo.png'


// Add props
const Header: FunctionComponent = () => {
  return (
      <div className="bg-primary-brand w-screen h-[4.375rem] flex items-center justify-between px-[5.375rem]">
          <Image
        alt='Logo of Solitude Farm'
        src={logo}
        width="49px"
        height="44px"
        objectFit="contain"
        
      />
          <ul className='uppercase flex gap-[3.25rem] text-white'>
              <h4 className='text-white'>Farm</h4>
              <h4 className='text-white'>Cafe</h4>
              <h4 className='text-white'>Education</h4>
              <h4 className='text-white'>Music</h4>
              <h4 className='text-white'>365 Days</h4>
              <h4 className='text-white'>Contact</h4>
          </ul>
      </div>
  );
};

export default Header;
