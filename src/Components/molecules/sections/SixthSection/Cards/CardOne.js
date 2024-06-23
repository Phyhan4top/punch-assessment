import React from 'react'
const Header = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-5">Onboard without the risk.</h1>
      <ul className="list-disc list-inside text-lg">
        <li>We pick the best for you to select.</li>
        <li>Thousands of vetted candidates in dozens of categories.</li>
        <li>Risk-free resource swapping for the best fit.</li>
      </ul>
    </div>
  );
};
const LearnMoreButton = () => {
  return (
    <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full">
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
const Card = () => {
  return (
    <div className="relative bg-white w-[437px] h-auto p-5 rounded-xl shadow-lg">
      <img
        src="/path/to/image.jpg"
        alt="Ariana Marie"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h3 className="text-center text-xl font-bold mt-3">Ariana Marie</h3>
      <p className="text-center text-gray-500">UI/UX Designer</p>
      <p className="text-center text-gray-500">3+ years as a design lead</p>
      <button className="mt-5 bg-yellow-500 text-white py-2 px-4 rounded-full">
        Take Interview
      </button>
    </div>
  );
};
export const cardOne = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[1300px] h-[657px] p-10 rounded-[20px] shadow-lg">
        <Header />
        <div className="flex">
          <LearnMoreButton />
          <Card />
        </div>
      </div>
    </div>
  );
}
