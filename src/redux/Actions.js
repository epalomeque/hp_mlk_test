import * as actionTypes from './/ActionTypes';
import HpService from '../http-common/service';

export function characterAdded(newItem) {
    return {
        type: actionTypes.CHARACTER_ADDED,
        payload: {
            newItem
        }
    }
};

export const characterFavoriteToggle = ( itemId ) => ({
        type: actionTypes.CHARACTER_FAVORITE_TOGGLE,
        payload: {
            itemId: itemId
        }
    });

export const staffToggle = () => ({
        type: actionTypes.STAFF_TOGGLE,
    });

export const studentsToggle = () => ({
        type: actionTypes.STUDENTS_TOGGLE,
    });

export const toggleAddPanel = (description) => ({
        type: actionTypes.TOGGLE_ADD_PANEL,
        payload: {
            description
        }
    });

export const showToggle = id => ({
    type: actionTypes.SHOW, 
    payload: id
});

export const hideToggle = id => ({
    type: actionTypes.HIDE, 
    payload: id
});


    // id, name, imgsrc, status, class_type, birthday, gender, eyes_color, hair_color, house, isFavorite
export const createCharacter = ({
    id, name, species, image, alive, hogwartsStudent, hogwartsStaff, dateOfBirth, yearOfBirth, ancestry,
    gender, eyeColour, hairColour, house, actor, patronus, wand, isFavorite
    }) => async (dispatch) => {
    try {
        const res = await HpService.create({ id, name, species, image, alive, hogwartsStudent, 
            hogwartsStaff, dateOfBirth, yearOfBirth, ancestry, gender, eyeColour, hairColour, 
            house, actor, patronus, wand, isFavorite });
        dispatch({
            type: actionTypes.CREATE_CHARACTER,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveCharacters = () => async (dispatch) => {
    try {
        const res = await HpService.getAll();
        dispatch({
            type: actionTypes.RETRIEVE_CHARACTERS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

// export const retrieveFavorites = () => async (dispatch) => {
//     try {
//         const res = await HpService.getFavorites();
//         dispatch({
//             type: actionTypes.RETRIEVE_FAVORITES,
//             payload: res.data,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };

export const updateCharacter = (id, data) => async (dispatch) => {
    try {
        console.log('updateCharacter data -> ', data);
        const res = await HpService.update(id, data);
        dispatch({
            type: actionTypes.UPDATE_CHARACTER,
            payload: data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

