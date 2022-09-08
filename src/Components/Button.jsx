import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:shadow-md hover:shadow-blue-200 hover:px-10 transition-all ease-in-out duration-300 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
