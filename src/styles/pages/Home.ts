import styled from 'styled-components';
import { motion } from "framer-motion";

interface IBox {
  background: string;
  color: string;
}

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 20px;
  width: 800px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled(motion.h1)`
  margin: 0 0 35px 0;
  padding: 0;
  color: #8257e6;
  text-transform: uppercase;
  font-weight: 100;

  span {
    color: #fafafa;
  }
`;

export const AnimatedContainer = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(2,1fr);
  grid-gap: 1rem;
  width: 100%;

  div {
    &:nth-child(1) {
      grid-area: 1/1/2/2;
    }

    &:nth-child(2) {
      grid-area: 1/2/2/4;
    }

    &:nth-child(3) {
      grid-area: 2/1/3/3;
    }

    &:nth-child(4) {
      grid-area: 2/3/3/4;
    }
  }
`;

export const AnimatedBox = styled(motion.div)<IBox>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  margin: 10px;
  height: 100px;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 5px;
  box-shadow: 8px 8px #3c3c3c;
  cursor: pointer;
`;

export const AnimatedBoxContent = styled(motion.div)<IBox>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 60%;
  height: 380px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 5px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      border: none;
      padding: 10px 5px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
