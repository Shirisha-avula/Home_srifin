import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded",
};
const variants = {
  outline: {
    light_blue_900_02: "border-light_blue-900_02 border border-solid text-light_blue-900_02",
  },
  fill: {
    white_A700: "bg-white-A700 shadow-sm text-blue_gray-900",
    light_blue_900_02: "bg-light_blue-900_02 text-white-A700",
  },
};
const sizes = {
  xs: "h-[36px] px-5 text-xs",
  md: "h-[71px] px-[27px] text-lg",
  sm: "h-[46px] px-[35px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "md",
  color = "light_blue_900_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "md", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["light_blue_900_02", "white_A700"]),
};

export { Button };
