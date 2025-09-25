import React from 'react';
import imgX from "../../images/x.png"
import imgfb from "../../images/fb.png"
import imgIn from "../../images/in.png"
import imgMs from "../../images/ms.png"
const Footer = () => {
    return (
      <div className="max-w-[1140px] mx-auto mt-5 ">
        <footer className="text-white footer sm:footer-horizontal bg-black  p-10 grid grid-cols-5 space-x-3">
          <nav className="col-span-2">
            <h1 className="mb-4 font-bold">CS — Ticket System</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </nav>
          <nav>
            <h6 className="mb-4 font-bold">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Sales</a>
          </nav>
          <nav>
            <h6 className="mb-4 font-bold">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="mb-4 font-bold">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav className="">
            <h6 className="mb-4 font-bold">Social Links </h6>
            <div className="grid grid-cols-1 gap-4">
              <a className="flex">
                <img src={imgX} alt="" />
                <p className="ml-3"> @CS — Ticket System</p>
              </a>
              <a className="flex">
                <img src={imgfb} alt="" />
                <p className="ml-3"> @CS — Ticket System</p>
              </a>
              <a className="flex">
                <img src={imgIn} alt="" />
                <p className="ml-3"> @CS — Ticket System</p>
              </a>
              <a className="flex">
                <img src={imgMs} alt="" />
                <p className="ml-3"> support@cst.com</p>
              </a>
            </div>
          </nav>
        </footer>
        <aside className="max-w-[1240px] mx-auto text-center bg-black text-white ">
          <p>
            © {new Date().getFullYear()} CS — Ticket System. All
            rights reserved.
          </p>
        </aside>
      </div>
    );
};

export default Footer;