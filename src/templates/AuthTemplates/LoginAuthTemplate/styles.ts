import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
	align-items: center;
	width: ${width}px;
`;

export const Head = styled.View`
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export const Body = styled.View`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 15%;
`;
export const Footer = styled.View`
	align-items: center;
	width: 100%;
	height: 25%;
	justify-content: space-between;
`;

export const Logo = styled.Image``;

export const ApresentationText = styled.Text`
	color: ${({ theme }) => theme.colors.text_title};
	width: 80%;
	font-size: 20px;
	text-align: center;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	width: 75%;
	text-align: center;
`;
