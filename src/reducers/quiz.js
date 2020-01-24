

export default function quiz(state = [], action) {
    if (action.type === 'ADD_QUIZ') {
        console.log("STATE: ", state, action);
        return [


            ...state,
            action.payload







        ]
    }
    else { return state }
}