import styled from "styled-components";

export const NormalButton = styled.section`
  display: flex;
  width: 103px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid var(--Site_Color);
  color: var(--Site_smallTextColor);
  font-size: 17px;
  background-color: var(--Site_BackgroundCOlor);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.5s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: var(--Site_Color);
    color: var(--Site_BackgroundCOlor);
    transition: all 0.1s;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const FancyButton = styled(NormalButton)`
  color: var(--Site_BackgroundCOlor);
  font-size: 17px;
  background-color: var(--Site_Color);
  border: 0px;
  &:hover {
    background-color: gold;
    color: var(--Site_BackgroundCOlor);
    transition: all 0.1s;
  }
`;

export const BigNormalBtn = styled(NormalButton)`
  font-size: 27px;
  width: 203px;
  height: 53px;
  font-weight: 600;
`;

export const BigFancyBtn = styled(FancyButton)`
  font-size: 27px;
  width: 203px;
  height: 53px;
  font-weight: 600;
`;
