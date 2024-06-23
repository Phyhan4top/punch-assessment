import React from 'react'
const Header = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-5">An open book.</h1>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>Easy and transparent one-to-one chat with candidates.</li>
        <li>Simple and convenient payment methods.</li>
        <li>Review past ratings.</li>
      </ul>
    </div>
  );
};
const LearnMoreButton = () => {
  return (
    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full mt-5">
      <svg
        width="25"
        height="15"
        viewBox="0 0 25 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M13.3588 7.5C13.3588 11.036 10.3683 13.9024 6.67939 13.9024C2.99046 13.9024 -2.2912e-08 11.036 -1.55709e-08 7.5C-8.22979e-09 3.96403 2.99046 1.09756 6.67939 1.09756C10.3683 1.09756 13.3588 3.96403 13.3588 7.5Z"
          fill="#ffffff"
        />
        <path
          d="M11.6412 15L11.6412 2.41685e-08L25 7.5L11.6412 15Z"
          fill="#ffffff"
        />
      </svg>
      Learn More
    </button>
  );
};

const ChatBox = () => {
  return (
    <div className="absolute top-[100px] right-[50px] w-[250px] bg-black text-white p-4 rounded-lg">
      <h3 className="font-bold mb-3">All Messages</h3>
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <img
            src="path/to/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">Esther Howard</p>
            <p className="text-sm">
              Hi Luis! I am currently working as an expert at alfizo.org
            </p>
            <p className="text-xs text-gray-400">12:00pm</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <img
            src="path/to/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">Esther Howard</p>
            <p className="text-sm">
              Hi Luis! I am currently working as an expert at alfizo.org
            </p>
            <p className="text-xs text-gray-400">12:00pm</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <img
            src="path/to/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">Esther Howard</p>
            <p className="text-sm">
              Hi Luis! I am currently working as an expert at alfizo.org
            </p>
            <p className="text-xs text-gray-400">12:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardTwo = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[1300px] h-[657px] p-10 rounded-[20px] shadow-lg relative">
        <Header />
        <LearnMoreButton />
        <ChatBox />
      </div>
    </div>
  );
}
