import React from "react";
import { HeaderNav } from "./HeaderNav";
import { Header, Container, Footer, Content } from "./styles";
import Logo from "../../images/dari-booking-logo-nb.png";

export function Layout(props) {
  return (
    <Container>
      <Header>
        <img src={Logo} alt={"logo"} width={"140px"} height={"44px"} />
        <HeaderNav />
      </Header>
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
}
