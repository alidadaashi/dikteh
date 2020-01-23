export default function edu(state = "دیپلم", action) {
    if (action.type === 'CHANGE_EDU') { return action.payload }
    else { return state }
}