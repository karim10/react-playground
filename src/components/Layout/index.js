import React from "react";
import { HeaderNav } from "./HeaderNav";
import { Header, Container, Footer, Content } from "./styles";

export function Layout(props) {
  return (
    <Container>
      <Header>
        <HeaderNav />
      </Header>
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
}
