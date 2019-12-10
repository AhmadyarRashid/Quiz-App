import { ADD_ANSWER } from '../actions/type';

const initialState = {
    results: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            const output = state.results.filter(item => item.name === action.payload.name);
            if (output.length > 0) {
                let newResult = state.results.map(item => {
                    if (item.name === action.payload.name) {
                        return {
                            name: action.payload.name,
                            answer: action.payload.value
                        }
                    } else {
                        return item;
                    }
                });
                return {
                    results: newResult
                }
            } else {
                let newResult = state.results.concat({ name: action.payload.name, answer: action.payload.value });
                return {
                    results: newResult
                }
            }
        default:
            return state
    }
}
