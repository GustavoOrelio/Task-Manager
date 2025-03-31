const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white";
    }
    if (variant === "ghost") {
      return "bg-transparent text-[#818181]";
    }
    if (variant === "secondary") {
      return "bg-[#EEEEEE] text-[#35383E]";
    }
  };

  const getSizeClasses = () => {
    if (size === "small") {
      return "px-3 py-1 text-xs";
    }
    return "px-3 py-2 text-sm";
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition-opacity hover:opacity-80 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
