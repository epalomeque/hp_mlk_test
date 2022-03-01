import './/css/HpMenu.css'
import React from 'react';
import {FaRegBookmark} from "react-icons/fa";
import {RiUserAddFill} from "react-icons/ri";
import { IconContext } from "react-icons";

class HpMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }

        this.showMenuFav = this.showMenuFav.bind(this);
    }



    render() {
        return (
            <div className='hp_menu'>
                <button className='hp_btn _left' onclick={this.showMenuFav}>Favoritos <FaRegBookmark /></button>
                <IconContext.Provider value={{ color: "white" }}>
                <button className='hp_btn _right'>Agregar <RiUserAddFill /></button>
                </IconContext.Provider>
            </div>
            )
        }
    };

export default HpMenu;