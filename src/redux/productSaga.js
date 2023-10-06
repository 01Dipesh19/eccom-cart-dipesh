import { takeEvery, put } from 'redux-saga/effects'
import {LIST_PRODUCT , SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch('http://localhost:3500/product');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}


function* productSaga() {
    yield takeEvery(LIST_PRODUCT, getProducts)
 
}

export default productSaga;