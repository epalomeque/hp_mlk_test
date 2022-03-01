import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toggle from './Toggle.js';
import CharacterAdd from ".//CharacterAdd.js"
import Characters from './Characters.js';
import FavoritesMenu from './FavoritesMenu.js';
import HPFavButton from './HPFavButton.js';
import FilterButtons from './FilterButtons.js';
import { IconContext } from "react-icons";
import { FaRegBookmark } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";

import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';

import './/css/Content.css'
import './/css/HpMenu.css'
import { showToggle, hideToggle } from '..//redux/Actions';

const selectFavMenuId = state => state.hp_reducer.favMenuId;

export const Content = () => {
    const dispatch = useDispatch();
    const isShowFavMenu = useSelector(selectFavMenuId); 
    const addCharId = 'addCharId';
    const favMenuId = 'favMenuId';

    return (
        <div className="content">
            
            <DesktopBreakpoint>
            <div className='hp_menu'>
                <div className='hp_menu_buttons'>
                <IconContext.Provider value={{ color: "white" }}>
                    <HPFavButton 
                        onClick={ () => {
                                if (isShowFavMenu) {
                                    dispatch(hideToggle(favMenuId))
                                }
                                else {
                                    dispatch(showToggle(favMenuId))
                                }
                            }
                        } 
                        msg='Favoritos' 
                        icon_component={ <FaRegBookmark /> } extra_classes='_left'
                        >
                    </HPFavButton>
                    <HPFavButton 
                        onClick={
                            () => dispatch(showToggle(addCharId))
                        } 
                        msg='Agregar' 
                        icon_component={ <RiUserAddFill /> } extra_classes='_right'
                        >
                    </HPFavButton>
                </IconContext.Provider>
                </div>
                <Toggle id={ favMenuId }>
                    <FavoritesMenu ></FavoritesMenu>
                </Toggle>
            </div>
            </DesktopBreakpoint>
            
            <TabletBreakpoint>
            <div className='hp_menu'>
                <div className='hp_menu_buttons'>
                    <HPFavButton 
                        onClick={ () => {
                                if (isShowFavMenu) {
                                    dispatch(hideToggle(favMenuId))
                                }
                                else {
                                    dispatch(showToggle(favMenuId))
                                }
                            }
                        } 
                        msg='Favoritos' 
                        icon_component={ <FaRegBookmark /> } extra_classes='_left'
                        >
                    </HPFavButton>
                    <HPFavButton 
                        onClick={
                            () => dispatch(showToggle(addCharId))
                        } 
                        msg='Agregar' 
                        icon_component={ <RiUserAddFill /> } extra_classes='_right'
                        >
                    </HPFavButton>
                </div>
                <Toggle id={ favMenuId }>
                    <FavoritesMenu ></FavoritesMenu>
                </Toggle>
            </div>
            </TabletBreakpoint>
            
            <PhoneBreakpoint>
            <div className='Phone hp_menu'>
                <div className='Phone hp_menu_buttons'>
                    <HPFavButton 
                        onClick={ () => {
                                if (isShowFavMenu) {
                                    dispatch(hideToggle(favMenuId))
                                }
                                else {
                                    dispatch(showToggle(favMenuId))
                                }
                            }
                        } 
                        msg='Favoritos' 
                        icon_component={ <FaRegBookmark /> } extra_classes='_leftTop'
                        >
                    </HPFavButton>
                    <HPFavButton 
                        onClick={
                            () => dispatch(showToggle(addCharId))
                        } 
                        msg='Agregar' 
                        icon_component={ <RiUserAddFill /> } extra_classes='_rightTop'
                        >
                    </HPFavButton>
                </div>
                <Toggle id={ favMenuId }>
                    <FavoritesMenu ></FavoritesMenu>
                </Toggle>
            </div>
            </PhoneBreakpoint>


            <FilterButtons></FilterButtons>
            
            <div className='ForContent'>
            <Characters></Characters>
            </div>

            <Toggle id={ addCharId }>
                <CharacterAdd onClick={() => dispatch(hideToggle(addCharId))}></CharacterAdd> 
            </Toggle>
            
        </div>
    )
    // }
};

export default Content;
