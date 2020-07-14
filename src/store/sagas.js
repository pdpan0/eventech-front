import { all } from 'redux-saga/effects'

function* asyncLogin(){
    yield console.log('09')
}

export default function* rootSaga(){
    yield all ([
        asyncLogin()
    ]);
}