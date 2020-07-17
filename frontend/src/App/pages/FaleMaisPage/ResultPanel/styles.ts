import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  position: relative;
  min-width: 100%;
  display: grid;
  grid-template-rows: 2fr 3fr;
`;

export const PlanPriceWrapper = styled.div`
  padding: 4px;
  display: grid;
  grid-template-rows: auto 1fr;

  :nth-of-type(1) {
    background: ${({ theme }) => shade(0.1, theme.color.background)};
    border-radius: 0 0 8px 8px;
  }

  + div {
    border-top: 2px solid #393939;
  }

  p {
    text-align: center;
    font-size: 24px;

    :nth-child(2) {
      align-self: center;
      font-size: 32px;
    }
  }
`;

export const FaleMaisPlan = styled(PlanPriceWrapper)`
  span {
    font-family: ${({ theme }) => theme.fontFamily.subTitle};
    color: ${({ theme }) => theme.color.primary};
  }

  p {
    :nth-child(2) {
      font-size: 48px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -8px;
  left: -8px;
  border: none;
  background: none;
  transition: 0.2s;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.color.background};
  background: ${({ theme }) => theme.color.background};

  > svg {
    color: #393939;
  }
`;
