import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import foodImg from './images/food.jpg';
import osloImg from './images/oslo.jpg';
import eduImg from './images/edu.jpg';
import postcardImg from './images/postcard.jpg';

const SmallText = styled.p`
  font-size: 1em;
`;

const Text = styled.p`
  font-size: 1.5em;
`;

const Content = styled.div`
  margin: 0.5em;
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

const OverlayText = styled(Text)`
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
export class App extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Content>
          <Text>hey!</Text>
          <Typist>
            <Typist.Delay ms={500} />
            I'm Alexis Tao
          </Typist>
        </Content>
        <ImageWrapper>
          <Overlay src={eduImg}>
            <OverlayText>education</OverlayText>
          </Overlay>
          <SmallOverlay src={osloImg}>
            <OverlayText>experience</OverlayText>
          </SmallOverlay>
          <Overlay src={postcardImg}>
            <OverlayText>about me</OverlayText>
          </Overlay>
          <Overlay src={foodImg}>
            <OverlayText>hobbies</OverlayText>
          </Overlay>
        </ImageWrapper>
      </PageWrapper>
    );
  }
}
