import React from 'react';
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

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  padding: 2em;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const Overlay = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 22em;
  height: 22em;
  margin: 0.5em;
  cursor: pointer;
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

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    };
  }

  onClickMode = mode => {
    this.setState({
      mode
    });
  };

  render() {
    const { mode } = this.state;

    switch (mode) {
      // home screen with all options shown
      default:
        return (
          <Wrapper>
            <ImageWrapper>
              <Overlay src={meImg} onClick={() => this.onClickMode('me')}>
                <OverlayText>about me</OverlayText>
              </Overlay>
              <Overlay src={eduImg} onClick={() => this.onClickMode('edu')}>
                <OverlayText>education</OverlayText>
              </Overlay>
              <Overlay
                src={osloImg}
                onClick={() => this.onClickMode('experience')}
              >
                <OverlayText>experience</OverlayText>
              </Overlay>
              <Overlay
                src={foodImg}
                onClick={() => this.onClickMode('smthing')}
              >
                <OverlayText>hobbies</OverlayText>
              </Overlay>
            </ImageWrapper>
          </Wrapper>
        );
    }
  }
}
