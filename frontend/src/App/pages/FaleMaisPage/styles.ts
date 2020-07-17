import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  > div {
    :nth-of-type(1) {
      background: ${({ theme }) => theme.color.background};
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    :nth-of-type(2) {
      background: ${({ theme }) => theme.color.primary};
      flex: 1;
      position: relative;
      display: flex;
      justify-content: center;
    }
  }
`;

const formAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(256px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: -128px;
  width: calc(100% - 8px);
  max-width: 500px;
  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.color.background};
  box-shadow: 0 4px 8px rgba(0.1, 0.1, 0.1, 0.5);
  animation: ${formAnimation} 0.5s ease-out;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.secondary};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 96px;
  font-weight: 500;
`;

export const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.subTitle};
  color: ${({ theme }) => theme.color.primary};
  font-size: 32px;
  font-weight: 500;
  transform: translateY(-64px) rotateZ(-5deg);
`;
