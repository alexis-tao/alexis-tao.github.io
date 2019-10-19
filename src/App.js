import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import { Content } from './Content.js';

import foodImg from './images/food.jpg';
import meImg from './images/me.jpg';
import osloImg from './images/oslo.jpg';

const SmallText = styled.p`
  font-size: 18px;
  margin: ${props => (props.padding ? props.padding + 'em' : 'none')};
`;

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 50px;
  background-color: #262626;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 20px 40px;
  background-color: #262626;
  box-sizing: border-box;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background-color: #262626;
`;

const BigText = styled.div`
  font-size: 50px;
`;

const Line = styled.hr`
  color: ${props => props.color};
  background-color: ${props => props.color};
  border: none;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0;
`;

const Header = styled.div`
  margin-bottom: 20px;
  width: 100%;
  flex: 2;
`;

const Overlay = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 300px;
  padding: 30px;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  color: #262626;
  &:hover,
  &:focus {
    text-decoration: none;
    color: #262626;
  }
`;

const OverlayText = styled.p`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  opacity: 0;
  transition: 250ms opacity;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  margin: 0;

  ${Overlay}:hover & {
    opacity: 1;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${props => props.color};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
`;

const BlackText = styled.div`
  color: #262626;
  font-size: ${props => (props.size === 'small' ? '16px' : '18px')};
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 3;
  margin-top: 50px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
`;

export class App extends React.Component {
  render() {
    return (
      <Page>
        <TopBar>
          <TopWrapper>
            <SmallText>home</SmallText>
            <SmallText>about</SmallText>
            <SmallText>experience</SmallText>
          </TopWrapper>
          <TopWrapper>
            <SmallText>github</SmallText>
            <SmallText>linkedin</SmallText>
            <SmallText>email</SmallText>
          </TopWrapper>
        </TopBar>
        <FlexBox>
          <Header>
            <BigText>alexis tao</BigText>
            <Line color="#dfcdc3" height="8px" width="150px" />
            <Links></Links>
          </Header>
          <Wrapper>
            <Box color="#dfcdc3">
              <BlackText>3rd year computer science student</BlackText>
              <Line color="#262626" height="1px" width="50px" />
              <BlackText>university of waterloo</BlackText>
            </Box>
            <Overlay src={foodImg}>
              <OverlayText>hmmmm</OverlayText>
            </Overlay>
          </Wrapper>
        </FlexBox>
        <FlexBox>
          <Wrapper>
            <Overlay src={meImg}>
              <OverlayText>hmmmm</OverlayText>
            </Overlay>
            <Box color="#719192">
              <BlackText size="small">
                3rd year computer science student at the university of waterloo
              </BlackText>

              <Line color="#262626" height="1px" width="50px" />
              <BlackText size="small">
                I love learning new things, problem solving, coding and
                photography!
              </BlackText>
              <BlackText size="small">
                I travelled to over 15 European cities this year while I was
                working in Oslo, Norway for 4 months {` `}
                <span role="img" aria-label="map">
                  🇸🇯
                </span>
              </BlackText>
            </Box>
          </Wrapper>
          <Header>
            <BigText>about me</BigText>
            <Line color="#719192" height="8px" width="150px" />
          </Header>
        </FlexBox>
        <FlexBox>
          <Header>
            <BigText>experience</BigText>
            <Line color="#dfcdc3" height="8px" width="150px" />
          </Header>
          <Wrapper>
            <Box color="#dfcdc3">
              <BlackText>Software Developer @ Rangle.io</BlackText>
              <BlackText size="small">September - December 2019 </BlackText>
              <BlackText size="small">
                I travelled to over 15 European cities this year while I was
                working in Oslo, Norway for 4 months
              </BlackText>
            </Box>
            <Box color="#dfcdc3">
              <BlackText>Front End Engineer @ Cognite AS</BlackText>
              <BlackText size="small">January - April 2019 </BlackText>
              <BlackText size="small">
                I travelled to over 15 European cities this year while I was
                working in Oslo, Norway for 4 months
              </BlackText>
            </Box>
            <Box color="#dfcdc3">
              <BlackText>Software Developer @ Peekapak Inc</BlackText>
              <BlackText size="small">May - August 2018 </BlackText>
              <BlackText size="small">
                I love learning new things, problem solving, coding and
                photography!
              </BlackText>
            </Box>
            <Overlay src={osloImg}>
              <OverlayText>hmmmm</OverlayText>
            </Overlay>
          </Wrapper>
        </FlexBox>
      </Page>
    );
  }
}
