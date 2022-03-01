import React from "react";
import { // useDispatch, 
    useSelector } from 'react-redux';
// import { BsTrash } from "react-icons/bs"
import { getFavorites //, prepFavData 
} from "./Functions";
// import { updateCharacter, hideToggle } from '..//redux/Actions';
import FavoriteLiItem from "./FavoriteLiItem";

import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';

import './/css/HpMenu.css'

const selectCharacters = state => state.http_reducer;

export const FavoritesMenu = () => {

    const Characters = useSelector(selectCharacters)
    // const favMenuId = 'favMenuId';
    // const dispatch = useDispatch();

    let favorites = getFavorites(Characters);


    return (
        <div className="top_favorites_menu">
        <DesktopBreakpoint>
        <div className="hp_favorites_menu">
            {
                favorites &&
                favorites.map(
                (char) => {
                    return (
                        <FavoriteLiItem charData={char}  key={`fav_${ char.id }`} >
                        </FavoriteLiItem>
                        )
                    }
                )   
            }
        </div>
        </DesktopBreakpoint>

        <TabletBreakpoint>
        <div className="hp_favorites_menu">
        {
                favorites &&
                favorites.map(
                (char) => {
                    return (
                        <FavoriteLiItem charData={char}  key={`fav_${ char.id }`} >
                        </FavoriteLiItem>
                        )
                    }
                )   
            }
        </div>
        </TabletBreakpoint>

        <PhoneBreakpoint>
        <div className="Phone hp_favorites_menu">
        {
                favorites &&
                favorites.map(
                (char) => {
                    return (
                        <FavoriteLiItem charData={char}  key={`fav_${ char.id }`} >
                        </FavoriteLiItem>
                        )
                    }
                )   
            }
        </div>
        </PhoneBreakpoint>
        </div>
        )
    };


export default FavoritesMenu;

