import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import "./Button.scss";

export default function Button({ className, ...rest }: MuiButtonProps) {
  return <MuiButton className={`MuiButton-overrides ${className ?? ""}`} {...rest} />;
}
