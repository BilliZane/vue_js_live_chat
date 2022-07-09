import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBzAhXyCYdrpjqzc_HdMT54zDHHvbiBpns',
  authDomain: 'vue-firebase-sites-e40ae.firebaseapp.com',
  projectId: 'vue-firebase-sites-e40ae',
  storageBucket: 'vue-firebase-sites-e40ae.appspot.com',
  messagingSenderId: '738793232688',
  appId: '1:738793232688:web:abdf964b011319db8a50f5',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}
