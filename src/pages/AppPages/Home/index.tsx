import { HomeTemplate } from '@appTemplates/HomeTemplate';

import React from 'react';
import * as Sg from '@globalStyled';

export const Home = () => {
	return (
		<Sg.GlobalContainer>
			<HomeTemplate />
		</Sg.GlobalContainer>
	);
};
