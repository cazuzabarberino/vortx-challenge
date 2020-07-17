import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  height: 56px;
  border: 0;
  padding: 0 16px;
  color: ${({ theme }) => theme.color.background};
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  margin-top: 16px;
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize};
  box-shadow: 0 4px ${({ theme }) => shade(0.5, theme.color.secondary)};

  &:hover {
    background: ${({ theme }) => shade(0.2, theme.color.secondary)};
  }
`;
