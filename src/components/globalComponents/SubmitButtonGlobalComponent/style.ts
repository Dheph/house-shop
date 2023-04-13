import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
	width?: number | string;
	height?: number | string;
	color?: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity<Props>`
	background-color: ${props =>
		props.color === 'primary'
			? props.theme.colors.primary
			: props.theme.colors.secondary};
	border-radius: 5px;
	margin-top: 8%;
	width: ${props => (props.width ? props.width : `${RFPercentage(40)}px`)};
	height: ${props => (props.height ? props.height : `${RFPercentage(9)}px`)};
	justify-content: center;
	align-items: center;
`;

export const TextButton = styled.Text<Props>`
	color: ${props =>
		props.color === 'primary'
			? props.theme.colors.secondary
			: props.theme.colors.primary};
	font-family: ${({ theme }) => theme.fonts.medium};
	font-size: 15px;
`;
