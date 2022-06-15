import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import logo from "../../public/logo.png";
import down from "../../public/down.png";
import location from "../../public/location.png";
import email from "../../public/email.png";
import contact from "../../public/contact.png";
import time from "../../public/time.png";
import instagram from "../../public/Instagram.png";
import facebook from "../../public/Facebook.png";
import youtube from "../../public/YouTube.png";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer: FunctionComponent = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await axios
      .post("/api/register", {
        fName,
        lName,
        emailAddress,
      })
      .then((res) => {
        setIsLoading(false);
        toast.success(res.data.message);
        setfName("");
        setlName("");
        setEmailAddress("");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status >= 400) {
          toast.error(err.response.data.error);
        }
      });
  };

  return (
    <div className="w-screen grid grid-cols-1 lg:grid-cols-3 h-[30.625rem]">
      <div className="col-span-2 pl-[2.3125rem] lg:pl-[5rem] pt-[1.875rem] lg:pt-[4rem] order-last lg:order-first bg-primary-brand ">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-[0.3125rem] justify-items-start">
          <div className="lg:hidden pb-3">
            <Link href="/">
              <Image
                alt="Logo of Solitude Farm"
                src={logo}
                width="49px"
                height="44px"
                objectFit="contain"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="grid gap-y-[0.5625rem]">
            <div className="flex border-b-[1.2px] border-black items-center">
            <p className="lg:font-bold text-[0.875rem] lg:text-[1rem]">Home</p>
            <div className="lg:hidden flex items-center">
            <Image
              alt="Chevron Down"
              src={down}
              width="23px"
              height="23px"
              objectFit="contain"
              className="cursor-pointer"
            />
            </div>
            </div>
            <div className="hidden lg:block">
              <h4>Farm</h4>
              <h4>Cafe</h4>
              <h4>Education</h4>
              <h4>365 Days</h4>
              <h4>Music</h4>
            </div>
          </div>
          <div className="grid gap-y-[0.5625rem]">
            <p className="lg:font-bold text-[0.875rem] lg:text-[1rem]">
              Our Work
            </p>
            <div className="hidden lg:block">
              <h4>Our Projects</h4>
              <h4>Music</h4>
              <h4>Testimonials</h4>
              <h4>Image Gallery</h4>
              <h4>Donate Now</h4>
            </div>
          </div>
          <div className="grid gap-y-[0.5625rem]">
            <p className="lg:font-bold text-[0.875rem] lg:text-[1rem]">
              Book Now
            </p>
            <div className="hidden lg:block">
              <h4>Workshops</h4>
              <h4>Lunch Scheme</h4>
              <h4>Basket Service</h4>
              <h4>Book an event</h4>
              <h4>Book a meal</h4>
            </div>
          </div>
          <div className="lg:col-span-3 grid gap-y-[0.5625rem] content-start">
            <div className="flex">
              <p className="lg:font-bold text-[0.875rem] lg:text-[1rem]">
                Contact Us
              </p>
            </div>
            <div className="hidden lg:block">
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
      <div className="bg-tertiary-brand px-[2.75rem]">
        <div className="pt-[2.8125rem]">
          <h2 className="text-primary-brand">Never miss a moment with us!</h2>
          <p className="font-bold">Subscribe to our monthly newsletter.</p>
        </div>
        {/* method="POST" action="/api/register */}
        <form
          className="grid pt-[2.875rem] gap-y-[1.5625rem]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex gap-x-[5%]">
            <input
              value={fName}
              name="fName"
              required
              type="text"
              placeholder="First name"
              className="placeholder:text-secondary-brand w-[35%]"
              onChange={(e) => setfName(e.target.value)}
            />
            <input
              value={lName}
              name="lName"
              required
              type="text"
              placeholder="Last name"
              className="placeholder:text-secondary-brand w-[60%]"
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <input
            value={emailAddress}
            name="email"
            required
            type="email"
            placeholder="Email address"
            className="placeholder:text-secondary-brand"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          {isLoading ? (
            <button disabled className="w-[50%] button-secondary">
              Subscribe Now
            </button>
          ) : (
            <button type="submit" className="w-[50%] button-primary">
              Subscribe Now
            </button>
          )}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            closeButton={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
