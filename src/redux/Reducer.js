import * as actionTypes from './/ActionTypes.js'
import { InitialState } from '..//InitialState';
import { toggleVar } from '../components/Functions.js';
// import { useSelector } from 'react-redux';
// import { getFavorites //, getLastId 
//    } from '..//components/Functions';

// const toggleVar = ( toToggle ) => !toToggle

// const selectCharacters = state => state.http_reducer;

export default function Reducer (state = InitialState, action) {
    // let chars = [...state.http_reducer] ? [...state.http_reducer] : [];
    // const chars = useSelector(selectCharacters);
    
    switch (action.type) {

      // Add character
      // case actionTypes.CHARACTER_ADDED:
      //   let newItem = action.payload.newItem;
      //   newItem['id'] = getLastId(chars);
      //   chars.push(newItem);
      //   return {
      //     ...state,
      //     characters: [...chars]
      //   }

      // Toggle staff filter
      case actionTypes.STAFF_TOGGLE:
        let toggStaff = state.toggleStaff;
        return {
          ...state,
          toggleStaff: toggleVar(toggStaff)
        }
      
      // Toggle studentes filter
      case actionTypes.STUDENTS_TOGGLE:
        let toggStudents = state.toggleStudents; 
        return {
          ...state,
          toggleStudents: toggleVar(toggStudents)
        }

      // Toggle favorited flag in component
      // case actionTypes.CHARACTER_FAVORITE_TOGGLE:
      //   const itemId = action.payload.itemId;
      //   if (chars) {
      //     chars[itemId.itemId].isFavorite = toggleVar(chars[itemId.itemId].isFavorite);
      //   }
        // return {
        //   ...state,
      //     characters: chars,
        //   favorites: getFavorites(chars)
        // }

      // Show component by named Id in payload 
      case actionTypes.SHOW:
        return {...state, 
          [action.payload]: true
        };

      // Hide component by named Id in payload 
      case actionTypes.HIDE:
        return {...state, 
          [action.payload]: false
        };

      // Default state
      default:
          return state
    }
    
};
