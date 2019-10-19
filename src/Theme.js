import styled from 'styled-components';

// const colors = {
//   pink: '#dfcdc3',
//   blue: '#719192'
// };

export const BigText = styled.div`
  font-size: 50px;
`;

export const Line = styled.hr`
  color: ${props => props.color};
  background-color: ${props => props.color};
  border: none;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  width: 100%;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: contain;
  width: 250px;
  height: 250px;
  padding: 30px;
  margin: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Box = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${props => props.color};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
`;

export const BlackText = styled.div`
  color: #262626;
  font-size: ${props => (props.size === 'small' ? '14px' : '18px')};
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  flex: 3;
  margin-top: 50px;
`;
