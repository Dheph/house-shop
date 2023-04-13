import React from 'react';
import * as S from './styles';
import slowly from '../../../assets/png/slowly.png';
import { SubmitButtonGlobalComponent } from '@globalComponents/SubmitButtonGlobalComponent';
export const LoginAuthTemplate = () => {
	return (
		<S.Container>
			<S.Head>
				<S.Logo source={slowly} />
				<S.ApresentationText>
					Organize sua dispensa e Automatize sua lista de compras
				</S.ApresentationText>
			</S.Head>

			<S.Body>
				<S.Text>
					Chega de ficar montando listas de compras todas as vezes que for no mercado
				</S.Text>
			</S.Body>

			<S.Footer>
				<SubmitButtonGlobalComponent text="Entrar" color="primary" />
				<SubmitButtonGlobalComponent text="Registrar-se" color="secondary" />
			</S.Footer>
		</S.Container>
	);
};
