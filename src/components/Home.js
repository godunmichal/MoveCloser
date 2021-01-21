import React from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import Room from "./Room";
import { useGlobalContext } from "../context";
import profile from "../assets/images/profile1.jpg";

function Home() {
  const { roomsData, loading } = useGlobalContext();
  if (loading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  } else {
    return (
      <HomeContainer>
        <Navbar image={profile} title="Hi Samuel" subtitle="Welcome to Home" />
        <RoomsContainer>
          {roomsData.map((item) => {
            return <Room key={item.id} {...item} />;
          })}
        </RoomsContainer>
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.div`
  padding: 1rem 1rem;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-color: #f98542;
`;

const RoomsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem 1rem;
`;
export default Home;
