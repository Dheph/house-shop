import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('screen');

export const GlobalContainer = styled.ScrollView`
	width: 100%;
	height: 100%;
`;

export const ScrollView = styled.ScrollView`
	width: 100%;
	height: 100%;
`;

export const CenteredItemsContainer = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
	height: ${height};
`;
