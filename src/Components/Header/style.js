import Styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = Styled.div`
  display: flex;
	justify-content: center;
	width: 100%;
	flex-wrap: wrap;
`;

export const Box = Styled.div`
	padding: 0px 15px;
	max-width: 960px;
	width: 100%;
`;

export const UpperHeadBox = Styled.div`
	width: 100%;
	height: 40px;
	display: flex;
  align-items: center;
	justify-content: center;
	text-align: center;
	background: #c0392b;
`;

export const Title = Styled(Link)`
	display: inline-block;
	text-decoration: none;
	color: white;
	margin: 0px auto;
`;

export const NavBarBox = Styled.div`
	display: flex;
`;

export const NavBarContainer = Styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding:15px 0px 0px;
	height: 60px;
	width: 100%;
	background: #ecf0f1;
`;

export const NavBar = Styled.div`
	display: flex;
	flex-flow: row;
`;

export const NavLink = Styled(Link)`
	width: 140px;
	display: block;
	text-align: center;
	padding: 0px 15px 10px;
	transition: all ease-out 0.3s;
	border-bottom: 2px solid ${props => (props.selected ? '#8e44ad' : 'transparent')};
	text-decoration: none;
	outline: none;
`;
