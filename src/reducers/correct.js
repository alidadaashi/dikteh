

export default function correct(state = ["C"], action) {
    if (action.type === 'ADD_CORRECT') { return action.payload }
    else { return state }
}