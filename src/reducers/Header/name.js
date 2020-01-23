export default function name(state = "علی داداشی", action) {
    if (action.type === 'CHANGE_NAME') { return action.payload }
    else { return state }
}