import React from "react";
import styled from "styled-components";
import ImageSlides from "./ImageSlides";
import Viewer from "./Viewer";
import Recommendations from "./Recommendations";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { db } from "../firebase";
import { setMovies } from "../features/moviesSlice";
import { selectUserName } from "../features/userSlice";
import { collection, onSnapshot, doc, query, where } from "firebase/firestore";
const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];
    const q1 = query(
      collection(db, "movies"),
      where("type", "==", "recommend")
    );
    const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
      recommends = [];
      querySnapshot.forEach((doc) => {
        recommends = [...recommends, { id: doc.id, ...doc.data() }];
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });

    const q2 = query(collection(db, "movies"), where("type", "==", "new"));
    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
      newDisney = [];
      querySnapshot.forEach((doc) => {
        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      });
    });

    const q3 = query(collection(db, "movies"), where("type", "==", "trending"));
    const unsubscribe3 = onSnapshot(q3, (querySnapshot) => {
      trending = [];
      querySnapshot.forEach((doc) => {
        trending = [...trending, { id: doc.id, ...doc.data() }];
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });

    const q4 = query(collection(db, "movies"), where("type", "==", "original"));
    const unsubscribe4 = onSnapshot(q4, (querySnapshot) => {
      originals = [];
      querySnapshot.forEach((doc) => {
        originals = [...originals, { id: doc.id, ...doc.data() }];
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisney,
            original: originals,
            trending: trending,
          })
        );
      });
    });
  }, [userName]);

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
    background: url("https://omaranbazna.github.io/disney-clone/images/home-background.png")
      center center no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
