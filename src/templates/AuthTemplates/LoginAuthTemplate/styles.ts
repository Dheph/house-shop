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

// TODO: export this component to global

export const SubmitButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.primary};
	width: 75%;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

export const SubmitButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.text_title};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: 15px;
`;

// component end
// TODO: excluir este após construir o component certinho :)
export const RegisterButton = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.colors.secondary};
	width: 75%;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

export const RegisterButtonText = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: 15px;
`;
