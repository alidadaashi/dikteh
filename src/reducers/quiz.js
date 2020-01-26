

export default function quiz(state = [], action) {
    if (action.type === 'ADD_QUIZ') {

        return [


            ...state,
            action.payload







        ]
    }
    else { return state }
}