import { 
    CREATE_CHARACTER, UPDATE_CHARACTER, RETRIEVE_CHARACTERS //, RETRIEVE_FAVORITES 
} from "./ActionTypes";

const initialState = [];

function HttpReducer(httpState = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CHARACTER:
            return [...httpState, payload];

        case RETRIEVE_CHARACTERS:
            return payload;

        // case RETRIEVE_FAVORITES:
        //     return payload;

        case UPDATE_CHARACTER:
            console.log('payload from httpReducer-> ', payload);
            return httpState.map((character) => {
                if (character.id === payload.id) {
                    return {
                        ...httpState,
                        ...payload,
                    };
                } else {
                    return character;
                }
            });

        default:
            return httpState;
    }
};

export default HttpReducer;