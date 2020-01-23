import { combineReducers } from 'redux';
import name from "./Header/name";
import sex from "./Header/sex";
import edu from "./Header/edu";
import birth from "./Header/birth";

export default combineReducers({
    name,
    sex,
    edu,
    birth
})