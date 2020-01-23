export default function sex(state = "مرد", action) {
    if (action.type === 'CHANGE_SEX') { return action.payload }
    else { return state }
}