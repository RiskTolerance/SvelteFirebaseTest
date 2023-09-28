// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDntNw6M4ubfaBMin8ailiHnyB3ejJR_Ig',
	authDomain: 'playground-11c09.firebaseapp.com',
	databaseURL: 'https://playground-11c09-default-rtdb.firebaseio.com',
	projectId: 'playground-11c09',
	storageBucket: 'playground-11c09.appspot.com',
	messagingSenderId: '600703759732',
	appId: '1:600703759732:web:c519ca81feef6431c4e821',
	measurementId: 'G-FKCK4K02SV'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
