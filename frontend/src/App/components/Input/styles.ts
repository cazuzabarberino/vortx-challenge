import styled, { css } from "styled-components";

import ToolTip from "../ToolTip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErroerd: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 8px;
  border: 2px solid #393939;
  width: 100%;
  display: flex;
  align-items: center;
  color: #393939;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErroerd &&
    css`
      border-color: ${({ theme }) => theme.color.primary};
    `}


  ${(props) =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.color.secondary};
      border-color: ${({ theme }) => theme.color.secondary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${({ theme }) => theme.color.secondary};
    `}


  input {
    padding: 16px;
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 16px;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-left: 8px;
  }
`;

export const Error = styled(ToolTip)`
  height: 20px;

  svg {
    margin-right: 16px;
  }

  span {
    background: ${({ theme }) => theme.color.primary};
    color: #fff;

    &::before {
      border-color: ${({ theme }) => theme.color.primary} transparent;
    }
  }
`;
