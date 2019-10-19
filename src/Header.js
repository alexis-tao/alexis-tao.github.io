import React from 'react';
import styled from 'styled-components';

import githubLogo from './images/github.png';
import linkedInLogo from './images/linkedin.png';
import emailIcon from './images/email.png';

const Link = styled.a`
  font-size: 18px;
  margin: ${props => (props.padding ? props.padding + 'em' : 'none')};
  color: #ffffff;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #dfcdc3;
    text-decoration: none;
  }
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
  padding: 40px;
  background-color: #262626;
  box-sizing: border-box;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`;

const IconWrapper = styled.a`
  height: auto;
  cursor: pointer;
  margin: 0.5em;
`;

const Icon = styled.img`
  width: 30px;
  height: auto;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export class Header extends React.Component {
  render() {
    return (
      <TopBar>
        <TopWrapper>
          <Link href="#home">home</Link>
          <Link href="#about">about</Link>
          <Link href="#experience">experience</Link>
        </TopWrapper>
        <TopWrapper>
          <Icons>
            <IconWrapper target="_blank" href="https://github.com/alexis-tao">
              <Icon src={githubLogo} alt="Github" />
            </IconWrapper>
            <IconWrapper
              target="_blank"
              href="https://linkedin.com/in/alexistao/"
              alt="LinkedIn"
            >
              <Icon src={linkedInLogo} />
            </IconWrapper>
            <IconWrapper
              target="_blank"
              href="mailto:tao.alexis@gmail.com"
              alt="Email"
            >
              <Icon src={emailIcon} />
            </IconWrapper>
          </Icons>
        </TopWrapper>
      </TopBar>
    );
  }
}
