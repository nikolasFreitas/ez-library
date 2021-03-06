import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = Styled.div`
  padding: 30px 15px 15px;
  height: calc(100vh - 40px);
  width: 100%;
  background: #ecf0f1;

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const BoxContent = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 960px;
  margin: 0px auto;
  border: 0px;

  @media screen and (max-width: 700px) {
    flex-flow: column;
    display: flex-block;
  }
`;

export const ImageBackground = Styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${props => props.url});
  background-position: center center;
  background-size: 90%;
  background-repeat: no-repeat;
  z-index: 0;

  filter: grayscale(80%) blur(5px);
  
  transition: all ease-in-out .3s;

  @media screen and (max-width: 700px) {
    filter: none;
    background-size: 100%;
  }
`;

export const Navigation = Styled(Link)`
  width: 33%;
  height: 100%;
  padding: 0px 15px;
  text-decoration: none;
  background: white;
  position: relative;
  outline: none;
  border-right: 2px solid #2c3e50;
  &:last-child {
    border-right: 0px;
  }
  
  &:hover ${ImageBackground} {
    filter: none;
    background-size: 100%;
  }
  
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 300px;
    border-right: 0px;
    margin-bottom: 30px;
    background-size: 100%;
  }
  
`;

export const Title = Styled.p`
  width: calc(100% - 1px);
  margin: 0px 1px;
  position: absolute;
  top: 30px;
  left: 0;
  font-size: 24px;
  text-align: center; 
  font-weight: bolder;
  background: white;
  color: #2980b9;

  @media screen and (max-width: 700px) {
    top: 0;
  }
`;

export const NavContent = Styled.p`
  width: 100%;
  height: 90px;
  background: white;
  position: absolute;
  text-align: justify;
  margin: 0px;
  padding: 15px;
  left: 0;
  bottom: 0;
`;
