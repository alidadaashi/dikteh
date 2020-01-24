import { combineReducers } from 'redux';
import name from "./Header/name";
import sex from "./Header/sex";
import edu from "./Header/edu";
import birth from "./Header/birth";
import quiz from "./quiz";
import correct from './correct';
import rootReducer from "./note"

export default combineReducers({
    name,
    sex,
    edu,
    birth,
    quiz,
    correct,
    rootReducer
})