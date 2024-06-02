import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth"

export default class BaseRepository {
    protected db: Firestore 
    protected auth: Auth

    constructor() {

        const firebaseConfig = {
            apiKey: "AIzaSyB1wvSgCiR-HlIcOup4gKFFn2HDBCUqr_M",
            authDomain: "jesuscanhelpministry.firebaseapp.com",
            projectId: "jesuscanhelpministry",
            storageBucket: "jesuscanhelpministry.appspot.com",
            messagingSenderId: "216429274187",
            appId: "1:216429274187:web:8f238d46089544cbe599ce",
            measurementId: "G-377MNBHV6P"
          };

        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app)
        this.auth = getAuth(app)
    }

}