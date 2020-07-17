import React, { InputHTMLAttributes, useCallback, useState } from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { Container, Error } from "./styles";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  value: string;
  name: string;
  setValue: (name: string, value: string) => void;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  value,
  name,
  setValue,
  error,
  icon: Icon,
  children,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);

  const handleSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(name, event.target.value);
    },
    [name, setValue]
  );

  return (
    <Container isErroerd={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <select
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleSelectChange}
        {...rest}
      >
        {children}
      </select>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
