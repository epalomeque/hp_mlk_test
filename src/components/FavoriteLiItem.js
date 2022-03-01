import React from "react";
import { useDispatch } from 'react-redux';
import { prepFavData } from "./Functions";
import { updateCharacter, hideToggle } from '..//redux/Actions';
import { BsTrash } from "react-icons/bs"


const FavoriteLiItem = ( charData ) => {
    const dispatch = useDispatch();
    const favMenuId = 'favMenuId';
    const id = charData.charData.id;
    const name = charData.charData.name;
    const image = charData.charData.image;
    
    const ToggleFavorite = ( itemId, chars ) => {

        dispatch(
            updateCharacter( itemId, prepFavData(itemId, chars ) )
        );
        dispatch(
            hideToggle( favMenuId ) 
        );
    };

    console.log(charData.charData);

    return (
        <li id={`fav_${ id }`} className="liRow">
            
                <span className="D-if" >
                    <img className="pic_small" src={ `${ image }` } alt={ `${ image }` } ></img>
                </span>
                <span className="D-if W50">{ name }</span>
                <span className="D-if">
                    <button className='clearButton favClearButton' 
                    onClick={
                        () => {
                            ToggleFavorite( id, charData.charData );
                        }
                    }><BsTrash/></button>
                </span>
            
        </li>
    )
};

export default FavoriteLiItem;