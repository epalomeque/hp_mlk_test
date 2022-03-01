import React
    from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countFavs } from './Functions';
import { IconContext } from "react-icons";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { getFavorites, prepFavData } from "./Functions";
import { updateCharacter } from '..//redux/Actions';
import { hideToggle } from '..//redux/Actions';

import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';
import './/css/Favorited.css';

const selectCharacters = state => state.http_reducer;
const selectorMaxFavs = state => state.hp_reducer.max_favs;

export const Favorited = ( { isFavorite, itemId }) => {        
        const dispatch = useDispatch();
        const Characters = useSelector(selectCharacters)
        const favMenuId = 'favMenuId';

        const ToggleFavorite = ( itemId, charData ) => {

            dispatch(
                updateCharacter( itemId, prepFavData(itemId, charData ) )
            );
            dispatch(
                hideToggle( favMenuId ) 
            );
        };

        const maxFavs = useSelector(selectorMaxFavs);
        const totalFavs = countFavs(getFavorites( Characters )) >= maxFavs;

        return (

            (Characters) && (
            <div className="favorited">                
                <button className='clearButton' 
                    onClick={ () => {
                        if ( totalFavs && !isFavorite ) {
                            alert("No puedes agregar más favoritos")
                        } else {
                            // dispatch( characterFavoriteToggle( { itemId } ))
                            // dispatch( ToggleFavorite( itemId, Characters ))
                            const charData = Characters[itemId]
                            ToggleFavorite( itemId, charData )
                        }
                        }
                        } >
                    {   <div>

                        <DesktopBreakpoint>
                            { isFavorite ? <FaBookmark /> : <FaRegBookmark /> }
                        </DesktopBreakpoint>

                        <TabletBreakpoint>
                            { isFavorite ? <FaBookmark /> : <FaRegBookmark /> }
                        </TabletBreakpoint>

                        <PhoneBreakpoint>
                            <IconContext.Provider value={{ size: "1.6em" }}>
                            { isFavorite ? <FaBookmark /> : <FaRegBookmark /> }
                            </IconContext.Provider>
                        </PhoneBreakpoint>
                        </div>
                    }
                </button>
            </div>
            )
        )
};

export default Favorited;
