import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParams, AppStackParams } from '@routes/routes';

export function useAuthNavigation() {
	const navigation = useNavigation<StackNavigationProp<AuthStackParams>>();
	return navigation;
}

export function useAppNavigation() {
	const navigation = useNavigation<StackNavigationProp<AppStackParams>>();
	return navigation;
}
