import React from "react";

export const RightArrowIcon = ({
  fill = "black",
  width = "25",
  height = "15",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6412 7.5C11.6412 11.036 14.6317 13.9024 18.3206 13.9024C22.0095 13.9024 25 11.036 25 7.5C25 3.96403 22.0095 1.09756 18.3206 1.09756C14.6317 1.09756 11.6412 3.96403 11.6412 7.5Z"
        fill={fill}
      />
      <path
        d="M13.3588 15L13.3588 2.41685e-08L1.55709e-08 7.5L13.3588 15Z"
        fill={fill}
      />
    </svg>
  );
};
