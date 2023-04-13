import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCNqX8dlrcDO988F-BJKb4tgrfv10m9c_4',
	authDomain: 'house-shop-c3253.firebaseapp.com',
	projectId: 'house-shop-c3253',
	storageBucket: 'house-shop-c3253.appspot.com',
	messagingSenderId: '672724852514',
	appId: '1:672724852514:web:4961990f3c5e8eb45d4f7b',
	measurementId: 'G-0MRBV0HD6C',
};

if (firebase.app.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
