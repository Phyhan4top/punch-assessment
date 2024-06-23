import React from "react";
import { LinkIcon } from "../../re-use/DynamicIcons/LinkIcon";
import style from "./style.module.css";
import { LogoIcon } from "../../re-use/DynamicIcons/LogoIcon";
export const Footer = () => {
  return (
    <div className={style.Frame}>
      <div className={style.b}>
        <h1 className={style.H1}>
          Need a job done, and done well? Get started
        </h1>
        <div className=" rotate-90">
          <LinkIcon />
        </div>
      </div>

      <footer className="w-[80%] mx-auto  bg-black py-10 flex flex-col justify-end">
        <div className="grid grid-cols-3 justify-between items-center">
          <div className="flex flex-col gap-3">
            <LogoIcon />
            <p className={style.p}>
              We take complex hiring processes - and simplify them. Connecting
              you to the world’s highly qualified talent pool.
            </p>
          </div>
          <h1 className={style.h}>
            Connecting the right people to the right businesses.
          </h1>
        </div>
        <div className="grid grid-cols-3 justify-between">
          <div>
            <h3 className={style.header}>Links and Redirects</h3>
            <ul className="flex gap-4 items-center">
              <li className="">
                <button className={style.btn}>
                  <a href="#" className="hover:underline">
                    Hire now
                  </a>
                </button>
              </li>
              <button className={style.btn}>
                <li>
                  <a href="#" className="hover:underline">
                    Apply now
                  </a>
                </li>
              </button>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 col-span-2">
            <div className="col-span-1">
              <h3 className={style.header}>Platform</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Find Work
                  </a>
                  <div className={style.line}></div>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Find Talent
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className={style.header}>Categories</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Data Science
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    IT & Networking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Web & Mobile
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className={style.header}>Help</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className={style.header}>Get in Touch</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center flex justify-between my-auto border-t-2">
          <p>All rights reserved by Zwilt</p>
          <div className={style.Privacy}>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>

            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
