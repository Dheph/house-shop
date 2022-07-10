import styled from 'styled-components/native';

export const Container = styled.View`
	justify-content: space-between;
	align-items: center;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
`;
