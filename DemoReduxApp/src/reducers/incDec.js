const initialState = {value : 0};
const newNumber = (state = initialState, action) => {
    switch (action.type) {
        case "num/INCREMENT" : return {
            ...state,
            value: state.value + 1
        }
        case "num/DECREMENT" : return {
            ...state,
            value: state.value - 1
        }
        default : return state ;
    }
}

export default newNumber;