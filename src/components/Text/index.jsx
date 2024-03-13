import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[18px]",
  lg: "text-[21px] font-medium leading-8",
  s: "text-sm font-normal leading-[14px]",
  xl: "text-[23px] font-normal",
  md: "text-base font-medium leading-[22px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
