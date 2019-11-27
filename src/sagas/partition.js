import generateNotes, { notesNames, numberNotes } from '../GenerateNotes'
import { takeEvery, call, put } from "redux-saga/effects"
import {types} from '../actions/partitions'

function* workerSaga(action) {
    const notes = yield call(generateNotes, numberNotes);
    const time = Date.now();
    const seconds = (time - action.startTime) / 60000;
    const speed = numberNotes / seconds;
    yield put({type: "UPDATE_NOTES", notes, time});
    yield put({type: "UPDATE_SPEED", speed});
}

function* textChangedSaga(action) {
    if (notesNames[action.notes[action.activeNote].note] === action.text) {
        yield put({type: "UPDATE_TEXT", message:""});
        yield put({type:"NEXT_NOTE", activeNote:action.activeNote, startTime: action.startTime});
    }
    else {
        yield put({type: "UPDATE_TEXT", message:action.text});
    }
}

function* nextNoteSaga(action) {
    const newActiveNote = action.activeNote + 1;
    if(newActiveNote === numberNotes) {

        yield put({type: "GENERATE_NOTES", startTime: action.startTime});
    }
    else {
        yield put({type: "UPDATE_ACTIVE", newActiveNote});
    }
}

export function* watcherSaga() {
    yield takeEvery("GENERATE_NOTES", workerSaga);
    yield takeEvery(types.TEXT.CHANGED, textChangedSaga);
    yield takeEvery("NEXT_NOTE", nextNoteSaga);
}
