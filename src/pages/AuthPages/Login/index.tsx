import { LoginTemplate } from '@authTemplates/LoginTemplate';

import React from 'react';
import * as Sg from '@globalStyled';

export const Login = () => {
	return (
		<Sg.CenteredItemsContainer>
			<LoginTemplate />
		</Sg.CenteredItemsContainer>
	);
};
