import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC-mmEaSmmcB5WcbDI-fblo61-MKILbzt0',
	authDomain: 'clone-5a5b8.firebaseapp.com',
	databaseURL: 'https://clone-5a5b8.firebaseio.com',
	projectId: 'clone-5a5b8',
	storageBucket: 'clone-5a5b8.appspot.com',
	messagingSenderId: '896870223164',
	appId: '1:896870223164:web:3cf9a87f99fb0c76df6239',
	measurementId: 'G-QMJQ7W53BR',
});

const auth = firebase.auth();

export { auth };
