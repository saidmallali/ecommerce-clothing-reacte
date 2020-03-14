import ShopActionTypes from './shop.types'
import {firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
 });

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
     return dispatch => {
        const collectionsRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());

        collectionsRef.get().then( snapshot => {
          const collectionMap = converCollectionSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionMap));
           
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
     }
 }