import React, { FC } from "react";
import classes from "./Input.module.sass";
import IconCloseButton from "../IconCloseButton";

interface Props {
  value: string;
  hidden?: boolean;
  clearValue?: () => void;
  type?: "text" | "password" | "email" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<Props> = ({
  value,
  hidden,
  clearValue,
  type,
  onChange,
  placeholder,
}) => {
  return (
    !hidden && (
      <>
        <div className={classes.input}>
          <input
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
          />
          {value && <IconCloseButton onClick={clearValue} />}
        </div>
      </>
    )
  );
};

export default Input;
