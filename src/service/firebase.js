import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCZ4N_vMes_oYC7buDQ2Weh5OuEvYFlu5M',
  authDomain: 'cropchat-b13ef.firebaseapp.com',
  databaseURL: 'https://cropchat-b13ef.firebaseio.com',
  projectId: 'cropchat-b13ef',
  storageBucket: 'cropchat-b13ef.appspot.com',
  messagingSenderId: '23771923108'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
