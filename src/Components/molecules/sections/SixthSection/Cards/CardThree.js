import React from 'react'
const Header = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-5">Stay in the loop.</h1>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>
          Track your staff activity down to every minute with screenshots.
        </li>
        <li>Comprehensive timesheet data to process payments.</li>
        <li>Create projects to organize and assign tasks more effectively.</li>
      </ul>
    </div>
  );
};

const LearnMoreButton = () => {
  return (
    <button className="flex items-center bg-black text-white px-4 py-2 rounded-full mt-5">
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

const Timer = () => {
  return (
    <div className="absolute top-[100px] right-[150px] w-[200px] bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6 2A9 9 0 1112 3a9 9 0 019 9z"
        />
      </svg>
      <span className="text-xl font-bold">00:05:28</span>
    </div>
  );
};

const ActivityTracker = () => {
  return (
    <div className="absolute bottom-[50px] right-[100px] w-[300px] bg-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold mb-2">Start Tracking</h3>
      <div className="flex items-center space-x-2">
        <img
          src="path/to/profile.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="font-semibold">00:05:28</p>
          <p className="text-xs text-gray-400">Tracked today</p>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Add Notes"
        />
      </div>
    </div>
  );
};

export const CardThree = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[1300px] h-[657px] p-10 rounded-[20px] shadow-lg relative">
        <Header />
        <LearnMoreButton />
        <Timer />
        <ActivityTracker />
      </div>
    </div>
  );
}
