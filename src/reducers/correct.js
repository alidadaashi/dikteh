

export default function correct(state = [], action) {
    if (action.type === 'ADD_CORRECT') {
        return [
            ...state,
            action.payload

        ]
    }
    else { return state }
}