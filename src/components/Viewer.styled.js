import styled from "styled-components";

export const ContainerWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Body = styled.div`
  background-color: lightgray;
  padding: 10px;
  font-size: 16px;
  width: 98%;
  height: 100%;
  border-radius: 5px;
`;
export const Title = styled.div`
  padding: 15px;
  margin-top: 5px;
  background: #ffc024;
  border-radius: 5px;
  font-family: Quicksand;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0px;
  line-height: 25px;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  background: white;
  height: 100vh;
  position: absolutes;
`;

export const LeftPanel = styled.div`
  width: 30%;
`;

export const SubContainer = styled.div`
  position: relative;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LeftElement = styled.p`
  top: 0;
  left: 0;
  color: gray;
`;

export const RightElement = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: gray;
`;

export const RightPanel = styled.div`
  width: 70%;
  height: 100vh;
`;

export const Story = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin-top: 3px;
  &.selected {
    background: #ffc024;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
