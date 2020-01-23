export default function birth(state = "1370", action) {
    if (action.type === 'CHANGE_BIRTH') { return action.payload }
    else { return state }
}