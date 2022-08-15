import styled from "styled-components";

import React from "react";
import { useSelector } from "react-redux/es/exports";
import { moviesReducer, selectMovieSelector } from "../features/moviesSlice";
const Details = () => {
  const movie = useSelector(selectMovieSelector);

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} alt="" />
      </Background>
      <ImageTitle>
        <img src={movie.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img
              src="https://omaranbazna.github.io/disney-clone/images/play-icon-black.png"
              alt="play"
            />
            <span>Play</span>
          </Player>
          <Trailer>
            <img
              src="https://omaranbazna.github.io/disney-clone/images/play-icon-white.png"
              alt="trailer"
            />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="https://omaranbazna.github.io/disney-clone/images/group-icon.png"></img>
            </div>
          </GroupWatch>
        </Controls>
        <DetailsFra>
          <Title>{movie.title}</Title>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>
            <div>{movie.description}</div>
          </Description>
        </DetailsFra>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw+5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  margin: 0px 50px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;
const ContentMeta = styled.div`
  min-width: 874px;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const Player = styled.button`
  font-size: 15px;
  margin-left: 22px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin-left: 10px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
`;
const AddList = styled.div`
  margin-left: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    height: 40px;
    width: 40px;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translate(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const GroupWatch = styled.div`
  margin-left: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-image: url("/images/group-icon.png");
    display: inline-block;
  }
`;
const Title = styled.div`
  color: rgb(249, 249, 249);
  padding: 16px 20px;
  font-size: 30px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const Description = styled.div`
  line-height: 30px;
  font-size: 20px;
  padding: 16px 30px;
  color: rgb(249, 249, 249);
  width: 60%;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 40%;
    max-width: 320px;
    padding: 16px 5px;
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  padding: 16px 20px;
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const DetailsFra = styled.div`
  background: rgb(0, 0, 30, 0.8);
  padding: 10px 20px;
  margin-bottom: 40px;
  width: 100%;
`;
export default Details;
