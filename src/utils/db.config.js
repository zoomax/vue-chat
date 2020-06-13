import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA2JfRUfQc7okQ6aSknTaIKanNK8nAPyuA',
  authDomain: 'vue-chat-3f640.firebaseapp.com',
  databaseURL: 'https://vue-chat-3f640.firebaseio.com',
  projectId: 'vue-chat-3f640',
  storageBucket: 'vue-chat-3f640.appspot.com',
  messagingSenderId: '66297568657',
  appId: '1:66297568657:web:cb63e37689234c5a658e30',
  measurementId: 'G-6EDE1343VL'
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)
export default FirebaseApp.firestore()
