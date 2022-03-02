import React from 'react';
import ".//css/CharacterCard.css";
import Favorited from ".//Favorited.js";
import CharacterStatus from ".//CharacterStatus.js";
import CharacterName from ".//CharacterName.js";
import CharacterData from ".//CharacterData.js";
import CharacterImg from ".//CharacterImg.js";
import DesktopBreakpoint from './/responsive_utils/desktop_breakpoint';
import TabletBreakpoint from './/responsive_utils/tablet_breakpoint';
import PhoneBreakpoint from './/responsive_utils/phone_breakpoint';


class CharacterCard2 extends React.Component {

    render() {

        const { id, name, species, gender, house, dateOfBirth, yearOfBirth, ancestry,
            eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff,
            actor, alive, image, isFavorite } = this.props.character

        const isAlive = alive === true ? "" : "+ ";
        const statusClass = alive === true ? "Vivo" : "Fallecido";
        const class_type = ( hogwartsStudent, hogwartsStaff ) => {
            if ( hogwartsStudent && hogwartsStaff ) {
                return "Estudiante | Staff";
            } else if ( hogwartsStudent && !hogwartsStaff ) {
                return "Estudiante";
            } else if ( !hogwartsStudent && hogwartsStaff ) {
                return "Staff";
            }
        };
    
        if ( false ) {
            console.log( id, name, species, gender, house, dateOfBirth, yearOfBirth, ancestry,
                eyeColour, hairColour, wand, patronus, hogwartsStudent, hogwartsStaff,
                actor, alive, image, isFavorite )
        }


        return (
            <div className='InlineBlock'>
                <DesktopBreakpoint>
                <div className={`character_card ${ statusClass }`} id={`char_card_${ id }`}>
                    <div className="card_body">
                        <CharacterImg imgsrc={ image } house={ house }></CharacterImg>
                        <div className="card_data">
                            <div className="card_data_top">
                                <CharacterStatus 
                                    status={ statusClass } 
                                    class_type={ class_type( hogwartsStudent, hogwartsStaff ) }>
                                </CharacterStatus>
                                <Favorited 
                                    isFavorite = { isFavorite } 
                                    itemId={ id }
                                    >
                                </Favorited>
                            </div>
                            <CharacterName 
                                name={ name } 
                                status={ isAlive }>
                            </CharacterName>
                            <CharacterData 
                                birthday={ dateOfBirth }
                                gender={ gender } 
                                eyes_color={ eyeColour } 
                                hair_color={ hairColour }>
                            </CharacterData>
                        </div>
                    </div>
                </div>
                </DesktopBreakpoint>
                <TabletBreakpoint>
                <div className={`Tablet character_card ${ statusClass }`} id={`char_card_${id}`}>
                    <div className="card_body">
                        <CharacterImg imgsrc={ image } house={ house }></CharacterImg>
                        <div className="card_data">
                            <div className="card_data_top">
                                <CharacterStatus 
                                    status={ statusClass } 
                                    class_type={ class_type(hogwartsStudent, hogwartsStaff) }>
                                </CharacterStatus>
                                <Favorited 
                                    isFavorite = { isFavorite } 
                                    itemId={ id }
                                    >
                                </Favorited>
                            </div>
                            <CharacterName 
                                name={ name } 
                                status={ isAlive }>
                            </CharacterName>
                            <CharacterData 
                                birthday={ dateOfBirth } 
                                gender={ gender } 
                                eyes_color={ eyeColour } 
                                hair_color={ hairColour }>
                            </CharacterData>
                        </div>
                    </div>
                </div>
                </TabletBreakpoint>
                <PhoneBreakpoint>
                <div className={ `Phone character_card ${ statusClass }` }
                    id={ `char_card_${ id }`}>
                    <div className="card_body">
                        <CharacterImg imgsrc={ image } 
                            house={ house }>
                        </CharacterImg>
                        <div className="card_data">
                            <div className="card_data_top">
                                <CharacterName 
                                    name={ name } 
                                    status={ isAlive }>
                                </CharacterName>
                                <CharacterStatus 
                                    status={ statusClass } 
                                    class_type={ class_type(hogwartsStudent, hogwartsStaff) }>
                                </CharacterStatus>
                                <Favorited 
                                    isFavorite = { isFavorite } 
                                    itemId={ id }
                                    >
                                </Favorited>
                            </div>
                        </div>
                    </div>
                </div>
                </PhoneBreakpoint>
            </div>
        )


    }
}

export default CharacterCard2;









