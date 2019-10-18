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

const Text = styled.p`
  font-size: 2em;
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 2em;
`;

const Wrapper = styled.div`
  position: relative;
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

export class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowExperience: false,
      isShowEducation: false,
      isShowProjects: false,
      isShowAboutMe: false
    };
  }

  toggleModal = type => {
    switch (type) {
      case 'experience':
        this.setState({
          isShowExperience: !this.state.isShowExperience
        });
        break;
      case 'education':
        this.setState({
          isShowEducation: !this.state.isShowEducation
        });
        break;
      case 'projects':
        this.setState({
          isShowProjects: !this.state.isShowProjects
        });
        break;
      default:
        this.setState({
          isShowAboutMe: !this.state.isShowAboutMe
        });
        break;
    }
  };

  render() {
    const {
      isShowAboutMe,
      isShowEducation,
      isShowExperience,
      isShowProjects
    } = this.state;
    return (
      <Wrapper>
        <ImageWrapper>
          <Overlay
            src={meImg}
            href="#about-me"
            onClick={() => this.toggleModal('aboutMe')}
          >
            <OverlayText>about me</OverlayText>
          </Overlay>
          <Overlay
            src={osloImg}
            href="#experience"
            onClick={() => this.toggleModal('experience')}
          >
            <OverlayText>experience</OverlayText>
          </Overlay>
          <Overlay
            src={eduImg}
            href="#education"
            onClick={() => this.toggleModal('education')}
          >
            <OverlayText>projects</OverlayText>
          </Overlay>
          <Overlay
            src={foodImg}
            href="#projects"
            onClick={() => this.toggleModal('projects')}
          >
            <OverlayText>projects</OverlayText>
          </Overlay>
        </ImageWrapper>
        <Modal
          isOpen={isShowAboutMe}
          onRequestClose={() => this.toggleModal('aboutMe')}
        >
          <Text>about me</Text>
        </Modal>
        {/* <Section id="about-me">
          <Text>about me</Text>
          <SmallText>Hey! </SmallText>
        </Section>
        <Section id="experience">
          <Text>experience</Text>
        </Section>
        <Section id="projects">
          <Text>projects</Text>
        </Section>
        <Section id="hobbies">
          <Text>hobbies</Text>
        </Section> */}
      </Wrapper>
    );
  }
}
