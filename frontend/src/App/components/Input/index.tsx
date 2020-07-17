import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { Container, Error } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  setValue: (name: string, value: string) => void;
  value: string;
  icon?: React.ComponentType<IconBaseProps>;
  max?: number;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  setValue,
  name,
  error,
  max,
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = event.target.value;
      newValue = newValue.replace(/[^0-9]/g, "");
      if (max && newValue.length > max) return;
      setValue(name, newValue);
    },
    [max, name, setValue]
  );

  return (
    <Container isErroerd={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
