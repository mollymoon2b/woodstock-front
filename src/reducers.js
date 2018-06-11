const reducers = (state = {}, action)=> {
    switch (action.type) {
        case "HAS_VOTED": {
            return {
                ...state,
                hasVoted: true,
            }
        }
        case "LOAD_FILES": {
            return {
                ...state,
                files: action.payload
            }
        }
        default:
            return state;
    }
};

export default reducers;