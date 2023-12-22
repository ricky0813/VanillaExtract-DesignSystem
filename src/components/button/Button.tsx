import React from "react";
import { button, color as colorKey } from "./style.css";
import clsx from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { typoVariant } from "@/styles/typography.css";

const Button = ({
  variant,
  text,
  className = "",
  color,
}: {
  variant: "primary" | "gray";
  text: string;
  className?: string;
  color?: string;
}) => {
  console.log(typoVariant.heading);
  return (
    <button
      className={clsx([button({ variant: variant }), className])}
      // style={assignInlineVars({ [colorKey]: color ?? null })}
    >
      {text}
    </button>
  );
};

export default Button;
