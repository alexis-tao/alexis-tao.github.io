import React from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';
import { Content } from './Content.js';

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

const SideBar = styled.div`
  background-color: #dfcdc3;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2em;
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  text-align: right;
  height: fill-available;
`;

const IconWrapper = styled.a`
  height: auto;
  cursor: pointer;
  margin: 0.5em;
`;

const Icon = styled.img`
  width: 1.8em;
  height: auto;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export class App extends React.Component {
  render() {
    return (
      <Page>
        <SideBar>
          <TextWrapper>
            <Text>
              <Typist>
                <Typist.Delay ms={500} />
                alexis tao
              </Typist>
            </Text>
            <SmallText>3rd year computer science student</SmallText>
            <SmallText>university of waterloo</SmallText>
          </TextWrapper>
          <Icons>
            <IconWrapper target="_blank" href="https://github.com/alexis-tao">
              <Icon
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt="Github"
              />
            </IconWrapper>
            <IconWrapper
              target="_blank"
              href="https://linkedin.com/in/alexistao/"
              alt="LinkedIn"
            >
              <Icon src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" />
            </IconWrapper>
            <IconWrapper
              target="_blank"
              href="mailto:tao.alexis@gmail.com"
              alt="Email"
            >
              <Icon src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/439/aiga_mail-512.png" />
            </IconWrapper>
          </Icons>
        </SideBar>
        <Content />
      </Page>
    );
  }
}
