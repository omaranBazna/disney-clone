import React from "react";
import styled from "styled-components";
import ImageSlides from "./ImageSlides";
import Viewer from "./Viewer";
import Recommendations from "./Recommendations";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/hooks/useDispatch";
import { db } from "../firebase";
import { setMovies } from "../features/moviesSlice";
import { selectUserName } from "../features/userSlice";
import { collection, onSnapshot } from "firebase/firestore";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommended":
            recommends.push({ id: doc.id, ...doc.data() });
        }
      });
    });
  }, []);
  return (
    <Container>
      <ImageSlides />
      <Viewer />
      <Recommendations />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  left: 0;
  position: relative;
  background: url("images/home-background.png");
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 40px;
  width: 100%;
  &:after {
    background: url("images/home-background.png") center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
