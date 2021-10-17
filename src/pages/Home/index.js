import React from "react";
import styled from "styled-components";
import { HouseCard } from "../../components/HouseCard";
import { houses } from "../../data";

const houses_data = [];
houses_data.length = 10;
houses_data.fill(0);

export function HomePage() {
  return (
    <HomeContainer>
      {houses.map((house) => (
        <HouseCard house={house} key={house.id} />
      ))}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
