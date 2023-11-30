// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: 'blog-app-d579c.firebaseapp.com',
	projectId: 'blog-app-d579c',
	storageBucket: 'blog-app-d579c.appspot.com',
	messagingSenderId: '888973869747',
	appId: '1:888973869747:web:97c08f925447fa2db6a6c6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
