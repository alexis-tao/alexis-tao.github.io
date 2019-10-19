import React from 'react';
import styled from 'styled-components';
import foodImg from './images/food.jpg';
import osloImg from './images/oslo.jpg';
import eduImg from './images/edu.jpg';
import meImg from './images/me.jpg';
import Modal from 'react-modal';

const SmallText = styled.p`
  font-size: 1.1em;
  margin: ${props => (props.padding ? props.padding + 'em' : 'none')};
`;

const BlackText = styled.div`
  color: #262626;
  font-size: 18px;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 2em;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const Overlay = styled.a`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 22em;
  height: 22em;
  margin: 0.5em;
  cursor: pointer;
  text-decoration: none;
  color: #262626;
  &:hover,
  &:focus {
    text-decoration: none;
    color: #262626;
  }
  position: sticky;
  top: 100px;
  right: 200px;
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

const Section = styled.div``;

const Box = styled.div`
  width: 22em;
  height: 22em;
  background-color: #dfcdc3;
  position: sticky;
  top: 275px;
  right: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Line = styled.hr`
  color: ${props => props.color};
  background-color: ${props => props.color};
  border: none;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0;
`;

export class Content extends React.Component {
  render() {
    return (
      <Wrapper>
        <Overlay src={foodImg}>
          <OverlayText>hmmmm</OverlayText>
        </Overlay>
        <Box>
          <BlackText>3rd year computer science</BlackText>
          <BlackText>university of waterloo</BlackText>
          <Line color="#262626" height="1px" width="50px" />
          <BlackText>github</BlackText>
          <BlackText>linkedin</BlackText>
          <BlackText>email</BlackText>
        </Box>
      </Wrapper>
    );
  }
}
