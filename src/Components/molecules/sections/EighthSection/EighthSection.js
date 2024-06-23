import React from "react";
import { LinkIcon } from "../../re-use/LinkIcon";
import style from "./style.module.css";
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
            <svg
              width="112"
              height="28"
              viewBox="0 0 112 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 24.6698V21.354L4.8675 15.3855H0.376839V10.0801H13.0323V13.396L8.16483 19.3645H13.4092V24.6698H0Z"
                fill="white"
              />
              <path
                d="M18.7276 24.6698L13.3262 10.0801H20.9886L22.6216 16.4797L24.8512 10.0801H27.7089L29.9385 16.4797L31.5715 10.0801H39.2339L33.8325 24.6698H27.8973L26.2958 20.1934L24.6628 24.6698H18.7276Z"
                fill="white"
              />
              <path
                d="M46.4255 6.06798C45.7137 6.70904 44.803 7.02957 43.6934 7.02957C42.5838 7.02957 41.6731 6.70904 40.9613 6.06798C40.2495 5.40481 39.8936 4.55375 39.8936 3.51479C39.8936 2.47582 40.2495 1.63581 40.9613 0.99475C41.6731 0.331583 42.5838 0 43.6934 0C44.803 0 45.7137 0.331583 46.4255 0.99475C47.1373 1.63581 47.4932 2.47582 47.4932 3.51479C47.4932 4.55375 47.1373 5.40481 46.4255 6.06798ZM40.1762 24.6698V10.0801H47.242V24.6698H40.1762Z"
                fill="white"
              />
              <path
                d="M55.6789 24.6698C53.69 24.6698 52.1198 24.0619 50.9684 22.8461C49.8379 21.6303 49.2726 19.9613 49.2726 17.8392V0.132634H56.3383V17.6403C56.3383 18.215 56.4535 18.6682 56.6838 18.9997C56.935 19.3092 57.2595 19.464 57.6573 19.464H58.2539L57.8143 24.6698H55.6789Z"
                fill="white"
              />
              <path
                d="M70.4379 19.4308L71.7254 23.6419C70.3227 24.703 68.8363 25.2335 67.2662 25.2335C65.0261 25.2335 63.257 24.5814 61.959 23.2772C60.682 21.9729 60.0434 20.1824 60.0434 17.9055V15.3855H58.2848V10.0801H60.6087L60.8599 4.97375H67.1091V10.0801H70.6577V15.3855H67.1091V17.9055C67.1091 18.5466 67.2348 19.055 67.486 19.4308C67.7581 19.7845 68.1245 19.9613 68.5851 19.9613C69.0875 19.9613 69.7051 19.7845 70.4379 19.4308Z"
                fill="white"
              />
              <path
                d="M96.0933 16.6715C96.0933 21.7082 92.007 25.7912 86.9663 25.7912C81.9256 25.7912 77.8394 21.7082 77.8394 16.6715C77.8394 11.6347 81.9256 7.55167 86.9663 7.55167C92.007 7.55167 96.0933 11.6347 96.0933 16.6715Z"
                fill="#FFBE2E"
              />
              <path
                d="M93.7464 27.3546V5.98828L112 16.6715L93.7464 27.3546Z"
                fill="#FFBE2E"
              />
            </svg>
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
