import React from 'react';
import * as S from './style';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
	text: string | object;
	width?: number | string;
	color?: 'primary' | 'secondary';
	submitFunction?: () => void;
};

export const SubmitButtonGlobalComponent: React.FC<Props> = ({
	width,
	color,
	text,
	submitFunction,
}) => {
	return (
		<S.Container width={width} color={color} {...submitFunction}>
			<S.TextButton color={color}>{text}</S.TextButton>
		</S.Container>
	);
};
