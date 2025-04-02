import PropTypes from "prop-types";
import { tv } from "tailwind-variants";

const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition-opacity hover:opacity-80",
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        ghost: "bg-transparent text-brand-dark-gray",
        secondary: "bg-brand-light-gray text-brand-dark-blue",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50 hover:opacity-50",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button
      className={button({ color, size, disabled: rest.disabled, className })}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "ghost", "secondary"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
};

export default Button;
