import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import foodImg from './images/food.jpg';
import osloImg from './images/oslo.jpg';
import eduImg from './images/edu.jpg';
import meImg from './images/me.jpg';

const SmallText = styled.p`
  font-size: 1.1em;
  margin: ${props => (props.padding ? props.padding + 'em' : 'none')};
`;

const Text = styled.p`
  font-size: 2em;
`;

const Content = styled.div`
  width: 100%;
`;

// to do: fade in animation
const PageWrapper = styled.div`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 5em;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const Overlay = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20em;
  height: 20em;
  margin: 0.5em;
  cursor: pointer;
`;

const SmallOverlay = styled(Overlay)`
  width: 15em;
  height: 15em;
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
  background: rgba(255, 255, 255, 0.2);
  margin: 0;
  ${Overlay}:hover & {
    opacity: 1;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0.5em;
`;

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20em;
  height: 100%;
  background-color: #dfcdc3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export class App extends React.Component {
  render() {
    return (
      <PageWrapper>
        {/* <SideBar></SideBar> */}
        <Header>
          <Content>
            <Text>
              <Typist>
                <Typist.Delay ms={500} />
                alexis tao
              </Typist>
            </Text>
            <SmallText>3rd year computer science student</SmallText>
            <SmallText>university of waterloo</SmallText>
          </Content>
        </Header>
        <ImageWrapper>
          <Overlay src={meImg}>
            <OverlayText>about me</OverlayText>
          </Overlay>
          <Overlay src={eduImg}>
            <OverlayText>education</OverlayText>
          </Overlay>
          <SmallOverlay src={osloImg}>
            <OverlayText>experience</OverlayText>
          </SmallOverlay>
          <Overlay src={foodImg}>
            <OverlayText>hobbies</OverlayText>
          </Overlay>
        </ImageWrapper>
      </PageWrapper>
    );
  }
}
