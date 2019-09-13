import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAqlVGPf3h96KAEntawcg8LK2e8o3yoQoM",
    authDomain: "ecommerce-clothing-react.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-react.firebaseio.com",
    projectId: "ecommerce-clothing-react",
    storageBucket: "",
    messagingSenderId: "37780188570",
    appId: "1:37780188570:web:7b0beebe4f6bde0c"
  }
  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }

    }

    return userRef;
  }


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
  });
   
   return await batch.commit() ;
}

export const converCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

   return transformedCollection.reduce((accumulatore, collection) => {
    accumulatore[collection.title.toLowerCase()] = collection;
    return accumulatore;
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();


var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;