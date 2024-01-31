import React, { FC } from "react";
import classes from "./Input.module.sass";
import IconCloseButton from "../IconCloseButton";

interface Props {
  value: string;
  clearValue: () => void;
  type: "text" | "password" | "email" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const Input: FC<Props> = ({
  value,
  clearValue,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <div className={classes.input}>
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
      {value && <IconCloseButton onClick={clearValue} />}
    </div>
  );
};

export default Input;
