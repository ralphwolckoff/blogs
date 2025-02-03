import clsx from "clsx";
import React from "react";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "div"
    | "p"
    | "span"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "white" | "gray" | "primary" | "secondary";
  weight?: "regular" | "meduim" | "bold";
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "display",
  children,
  weight = "regular",
  className,
  component: Component = "div",
}: Props) => {
  let variantStyle: string = "";
  switch (variant) {
    case "display":
      variantStyle = "text-red-500";
      break;
    case "h1":
      variantStyle = "text-green-500";
      break;
  }

  return (
    <Component
      className={clsx(
        variantStyle,
        weight === "meduim" && "font-medium",
        className,
        "text-8xl"
      )}
    >
      {children}
    </Component>
  );
};
