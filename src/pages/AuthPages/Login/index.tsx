import React from 'react';
import * as Sg from '@globalStyled';
import { LoginAuthTemplate } from '@authTemplates/LoginAuthTemplate';

export const Login = () => {
	return (
		<Sg.CenteredItemsContainer>
			<LoginAuthTemplate />
		</Sg.CenteredItemsContainer>
	);
};
