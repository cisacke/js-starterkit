export const initialState = {};

export function reducer (state=initialState, action={}) {
    switch(action.type) {
        case 'something':
            return state;

        default:
            return state;
    }
}

export default reducer;

