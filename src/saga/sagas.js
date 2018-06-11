import { call, put, takeEvery } from 'redux-saga/effects'

export function* fetchCall(){
    // const response = yield call(fetch, `https://powerful-tundra-37364.herokuapp.com/images`);
    const response = yield call(fetch, `http://localhost:8000/images`);
    const data = yield call([response, response.json]);

    yield put({type: 'LOAD_FILES', payload: data});
    return data;
}

export function* watcherClciked() {
    yield takeEvery('INIT', fetchCall);
}

export function* updateVote(action){
    const id = action.payload.id;
    if (id) {
        // const response = yield call(fetch, `https://powerful-tundra-37364.herokuapp.com/addVote`, {
        const response = yield call(fetch, `http://localhost:8000/addVote`, {
            method: 'POST',
            body: JSON.stringify({
                id
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
        });
        const data = yield call([response, response.json]);
        yield put({type: 'VOTED', payload: data});
    }
}


export function* hasVoted() {
    yield takeEvery('HAS_VOTED', updateVote);
}