import React from 'react';
import * as S from './styles';
import slowly from '../../../assets/png/slowly.png';

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
				<S.SubmitButton>
					<S.SubmitButtonText> Entrar </S.SubmitButtonText>
				</S.SubmitButton>

				<S.RegisterButton>
					<S.RegisterButtonText> Registrar-se </S.RegisterButtonText>
				</S.RegisterButton>
			</S.Footer>
		</S.Container>
	);
};
