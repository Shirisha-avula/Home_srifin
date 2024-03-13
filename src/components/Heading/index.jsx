import React from "react";

const sizes = {
  "3xl": "text-[63px] font-semibold leading-[68px]",
  "2xl": "text-4xl font-semibold leading-[54px]",
  xl: "text-[32px] font-semibold leading-[48px]",
  s: "text-lg font-semibold leading-[18px]",
  md: "text-[22px] font-semibold leading-[33px]",
  xs: "text-xs font-bold leading-[18px]",
  lg: "text-[23px] font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800 font-metropolis ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
