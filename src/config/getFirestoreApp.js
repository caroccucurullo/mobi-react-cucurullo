import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD1w706JMiW75M337f2YkHkeQqIkmAGdnA",
    authDomain: "mobi-react-cucurullo.firebaseapp.com",
    projectId: "mobi-react-cucurullo",
    storageBucket: "mobi-react-cucurullo.appspot.com",
    messagingSenderId: "811704827413",
    appId: "1:811704827413:web:cb70e517b0157b4363181c"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}
