import Image from "next/image";
import { FunctionComponent } from "react";
import location from "../../public/location.png";
import email from "../../public/email.png";
import contact from "../../public/contact.png";
import time from "../../public/time.png";
import instagram from "../../public/Instagram.png";
import facebook from "../../public/Facebook.png";
import youtube from "../../public/YouTube.png";

// Add props
const Footer: FunctionComponent = () => {
  return (
    <div className="bg-primary-brand w-screen flex h-[30.625rem]">
      <div className="min-w-[67%] pl-[5rem] pt-[4rem]">
        <div className="grid grid-cols-6 gap-x-[0.3125rem]">
          <div className="grid gap-y-[0.5625rem]">
            <p className="font-bold">Home</p>
            <div>
              <h4>Farm</h4>
              <h4>Cafe</h4>
              <h4>Education</h4>
              <h4>365 Days</h4>
              <h4>Music</h4>
            </div>
          </div>
          <div className="grid gap-y-[0.5625rem]">
            <p className="font-bold">Our Work</p>
            <div>
              <h4>Our Projects</h4>
              <h4>Music</h4>
              <h4>Testimonials</h4>
              <h4>Image Gallery</h4>
              <h4>Donate Now</h4>
            </div>
          </div>
          <div className="grid gap-y-[0.5625rem]">
            <p className="font-bold">Book Now</p>
            <div>
              <h4>Workshops</h4>
              <h4>Lunch Scheme</h4>
              <h4>Basket Service</h4>
              <h4>Book an event</h4>
              <h4>Book a meal</h4>
            </div>
          </div>
          <div className="col-span-3 grid gap-y-[0.5625rem] content-start">
            <p className="font-bold">Contact Us</p>
            <div>
              <div className="flex gap-x-[0.5625rem]">
                <Image
                  alt="GPS Pin"
                  src={location}
                  width="12px"
                  height="12px"
                  objectFit="contain"
                />
                <h4>Solitude Farm, Auroville, Tamil Nadu - 605101</h4>
              </div>
              <div className="flex gap-x-[0.5625rem]">
                <Image
                  alt="Clock"
                  src={time}
                  width="12px"
                  height="12px"
                  objectFit="contain"
                />
                <h4>Monday - Saturday (9 am - 3:30 pm)</h4>
              </div>
              <div className="flex gap-x-[0.5625rem]">
                <Image
                  alt="Email"
                  src={email}
                  width="12px"
                  height="12px"
                  objectFit="contain"
                />
                <h4>solitudepermaculture@gmail.com</h4>
              </div>
              <div className="flex gap-x-[0.5625rem]">
                <Image
                  alt="Phone"
                  src={contact}
                  width="12px"
                  height="12px"
                  objectFit="contain"
                />
                <h4>9843319260</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[5.625rem]">
          <hr className="border-black opacity-50"></hr>
          <div className="pt-[1.9375rem] flex items-end justify-between pr-[2.5rem]">
            <p>© Copyright - Solitude Farm, Auroville</p>
            <div className="flex items-end gap-x-[0.5625rem]">
              <h4>Follow Us:</h4>
              <Image
                alt="Instagram Icon"
                src={instagram}
                width="39.65px"
                height="35px"
                objectFit="contain"
              />
              <Image
                alt="Instagram Icon"
                src={facebook}
                width="35.84"
                height="35px"
                objectFit="contain"
              />
              <Image
                alt="Instagram Icon"
                src={youtube}
                width="39.65px"
                height="35px"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-brand w-[33%] px-[2.75rem]">
        <div className="pt-[2.8125rem]">
          <h2 className="text-primary-brand">Never miss a moment with us!</h2>
          <p className="font-bold">Subscribe to our monthly newsletter.</p>
        </div>
        <form className="grid pt-[2.875rem] gap-y-[1.5625rem]" method="POST" action="/api/register">
          <div className="flex gap-x-[5%]">
            <input name='fName' required type='text' placeholder="First name" className="placeholder:text-secondary-brand w-[35%]"/>
            <input name='lName' required type='text' placeholder="Last name" className="placeholder:text-secondary-brand w-[60%]"/>
          </div>
          <input name='email' required type='email' placeholder="Email address" className="placeholder:text-secondary-brand"/>
          <button className="w-[50%]"  >
              Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
