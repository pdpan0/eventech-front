import { takeEvery, put } from 'redux-saga/effects'
import { Types } from './ducks/user'

function* asyncLogin(){
    console.log("a")
    yield put([Types.LOGIN])
}

export default function* root(){
    yield [
        takeEvery([Types.LOGIN], asyncLogin),
    ];
}