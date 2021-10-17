import styled from "styled-components";

export const Header = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  flex-direction: row;
  background-color: ${(props) => props.theme.secondary};
`;

export const Footer = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.white};
  flex: 1;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
