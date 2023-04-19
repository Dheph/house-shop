import { IRegisterDtoRequest } from './dto/registerDtoRequest';
import errors from '../../utils/general_errors.json';
//import firebase from '../../../firebaseConnection';

export const registerService = async ({
	email,
	password,
}: IRegisterDtoRequest): Promise<any | void> => {
	/*	if (!email || email === '') {
		console.log('necessario adicionar email ');
		return;
	}
	if (!password || password === '') {
		console.log('necessario adicionar password ');
		return;
	}
	await firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((value: any) => {
			return value.user.email;
		})
		.catch((error: any) => {
			if (error.code === 'auth/weak-password') {
				return errors.auth_errors['weak-password'];
			}
			if (error.code === 'auth/invalid-email') {
				return errors.auth_errors['invalid-email'];
			} else {
				return errors.generics['something_wrong'];
			}
		});
		*/
};
