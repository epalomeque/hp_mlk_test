import React, { //useState, 
    useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import CharacterCard from './CharacterCard'
import { canBePrinted } from "./Functions";
import { retrieveCharacters } from '../redux/Actions';

const selectToggleStudents = state => state.hp_reducer.toggleStudents;
const selectToggleStaff = state => state.hp_reducer.toggleStaff;
// const selectFavorites = state => state.hp_reducer.favorites;


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
                // const print = canBePrinted(character.class_type, toggleStaff, toggleStudents)
                const print = canBePrinted(character.hogwartsStudent, character.hogwartsStaff, toggleStaff, toggleStudents)
                return( 
                    (print) && (
                    <CharacterCard 
                            character={character} 
                            key={`char_card_${character.id}`} 
                        >
                    </CharacterCard>
                    )
                )
            }

        )

    )
};

export default Characters;
