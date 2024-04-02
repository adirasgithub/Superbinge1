import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyA7EZpcJci8cLf1KxMWPoAYV7X8IjpXJaU",
	authDomain: "superrbinge.firebaseapp.com",
	projectId: "superrbinge",
	storageBucket: "superrbinge.appspot.com",
	messagingSenderId: "87992533446",
	appId: "1:87992533446:web:1aea2954db15965d9232c7",
	measurementId: "G-DB4LT1BSNK",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
