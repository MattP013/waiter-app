import styled from "styled-components";
import React from "react";
import logo from '../../assets/images/logo.svg';
import { Container,Content } from "./styles";

function Header(){
    return(
      <Container>
        <Content className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </Content>

        <img src={logo} alt="WaiterApp" />
      </Container>
    )
}

export default Header;
