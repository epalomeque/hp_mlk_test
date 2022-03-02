import React, { //useState, 
    useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import CharacterCard from './CharacterCard'
import CharacterCard2 from './CharacterCard2'
import { canBePrinted } from "./Functions";
import { retrieveCharacters } from '../redux/Actions';

const selectToggleStudents = state => state.hp_reducer.toggleStudents;
const selectToggleStaff = state => state.hp_reducer.toggleStaff;


export const Characters = () => {
    const Chars = useSelector(state => state.http_reducer);
    const toggleStaff = useSelector(selectToggleStaff);
    const toggleStudents = useSelector(selectToggleStudents);

    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(retrieveCharacters()); 
    // eslint-disable-next-line
    }, []);

    return ( 
        Chars &&
        Chars.map(
            (character) => {
                const print = canBePrinted(character.hogwartsStudent, character.hogwartsStaff, toggleStaff, toggleStudents)
                return( 
                    (print) && (
                    <CharacterCard2
                            character={character} 
                            key={`char_card_${character.id}`} 
                        >
                    </CharacterCard2>
                    )
                )
            }

        )

    )
};

export default Characters;
