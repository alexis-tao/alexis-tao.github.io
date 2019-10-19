import React from 'react';
import styled from 'styled-components';

import foodImg from './images/food.jpg';
import meImg from './images/me.jpg';
import osloImg from './images/oslo.jpg';
import eduImg from './images/edu.jpg';
import postcardImg from './images/postcard.jpg';
import journalImg from './images/journal.jpg';
import workImg from './images/work.jpg';

import { Header } from './Header.js';
import {
  BigText,
  Line,
  Title,
  ImageWrapper,
  FlexBox,
  Box,
  BlackText,
  Wrapper
} from './Theme';

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 50px;
  background-color: #262626;
`;

export class App extends React.Component {
  render() {
    return (
      <Page>
        <Header />

        <FlexBox id="home">
          <Title>
            <BigText>alexis tao</BigText>
            <Line color="#dfcdc3" height="8px" width="150px" />
          </Title>
          <Wrapper>
            <Box color="#dfcdc3">
              <BlackText>3rd year computer science</BlackText>
              <Line color="#262626" height="1px" width="50px" />
              <BlackText>university of waterloo</BlackText>
            </Box>
            <ImageWrapper src={foodImg} />
            <ImageWrapper src={eduImg} />
            <ImageWrapper src={osloImg} />
          </Wrapper>
        </FlexBox>

        <FlexBox id="about">
          <Wrapper>
            <ImageWrapper src={meImg} />
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
            <ImageWrapper src={journalImg} />
            <ImageWrapper src={postcardImg} />
          </Wrapper>
          <Title>
            <BigText>about</BigText>
            <Line color="#719192" height="8px" width="100px" />
          </Title>
        </FlexBox>

        <FlexBox id="experience">
          <Title>
            <BigText>experience</BigText>
            <Line color="#dfcdc3" height="8px" width="150px" />
          </Title>
          <Wrapper>
            <Box color="#dfcdc3">
              <div>
                <BlackText>
                  Software Developer
                  <br />
                  Rangle.io
                </BlackText>
                <BlackText size="small">September - December 2019 </BlackText>
                <BlackText size="small">
                  React | Gatsby | Contentful | NodeJS
                </BlackText>
              </div>
              <BlackText size="small">
                Created new components using React for marketing team to
                configure in Contentful as a CMS for Rangle's website
              </BlackText>
            </Box>
            <Box color="#dfcdc3">
              <div>
                <BlackText>
                  Front End Engineer <br />
                  Cognite AS
                </BlackText>
                <BlackText size="small">January - April 2019 </BlackText>
                <BlackText size="small">
                  React | Redux | TestCafe | CSS
                </BlackText>
              </div>
              <BlackText size="small">
                Implemented new feature to compare trends in web app with React
                and increased code coverage with end to end tests using TestCafe
              </BlackText>
            </Box>
            <Box color="#dfcdc3">
              <div>
                <BlackText>
                  Software Developer <br />
                  Peekapak Inc
                </BlackText>
                <BlackText size="small">May - August 2018 </BlackText>
                <BlackText size="small">
                  React | Java | SASS | AWS DynamoDB
                </BlackText>
              </div>
              <BlackText size="small">
                Developed new product pages using React and SASS and streamlined
                parental consent process with Java and React
              </BlackText>
            </Box>
            <ImageWrapper src={workImg} />
          </Wrapper>
        </FlexBox>
      </Page>
    );
  }
}
