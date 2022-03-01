import React from 'react';
import { useDispatch } from 'react-redux';
//import { characterAdded } from '../redux/Actions';
import { createCharacter } from '../redux/Actions';
import './/css/CharacterAdd.css'


export const CharacterAdd = ( { onClick } ) => {
        const dispatch = useDispatch();

        let newItem = {
            'Nombre': '',
            'Cumple': '',
            'EyesColor': '',
            'HairColor': '',
            'genero': '',
            'posicion': '',
            'fotografia': '',
            'house': 'gryffindor',
        }
        
        const isStudent = ( posicion ) => {
            console.log('isStudent posicion ->', posicion)
            return posicion === 'Estudiante' ? true : false;
        }

        const isStaff = ( posicion ) => {
            console.log('isStaff posicion ->', posicion)
            return posicion === 'Staff' ? true : false;
        }

        const onSubmit = (e, item) => {
            e.preventDefault();

            dispatch(createCharacter({
                name: item.Nombre, 
                species: '',
                image: "ll_foto.png",
                alive: true, 
                hogwartsStudent: isStudent( item.posicion ),
                hogwartsStaff: isStaff( item.posicion ),
                dateOfBirth: item.Cumple, 
                yearOfBirth: '',
                ancestry: '', 
                gender: item.genero, 
                eyeColour: item.EyesColor, 
                hairColour: item.HairColor, 
                house: item.house, 
                actor: '',
                patronus: '',
                wand: {},
                isFavorite: false
                })
            );

            alert("El registro ha sido agregado, las imagenes no se cargan a ningun servidor");

            // Closing add window
            onClick();

        };

        return (
            <div className="character_add_container">
                <div className="character_add_panel">
                    <form onSubmit={ e => onSubmit(e, newItem) }>
                        <div className='panel_header'>
                            <h1>Agregar personaje</h1>
                            <button className="button btn_cancel" onClick={ onClick } >X</button>
                        </div>
                        <div className='panel_content'>
                            <div className='panel_group'>
                            <label>Nombre</label>
                            <input type="text" name="Nombre" className="input" 
                                onChange={ e => {
                                    newItem.Nombre = e.target.value;
                                } } />
                            </div>

                            <div className='panel_group'>
                            <label>Cumpleaños</label>
                            <input type="text" name="Cumple" className="input" 
                                onChange={ e => {
                                    newItem.Cumple = e.target.value
                                }} />
                            </div>

                            <div className='panel_group'>
                                <label>Color de ojos</label>
                                <input type="text" name="EyesColor" className="input" 
                                    onChange={ e => newItem.EyesColor = e.target.value} />
                            </div>

                            <div className='panel_group'>
                                <label>Color de pelo</label>
                                <input type="text" name="HairColor" className="input" 
                                    onChange={ e => newItem.HairColor = e.target.value} />
                            </div>

                            <div className='panel_group flex_row'>
                                <label>Género</label>
                                <div className='input_group'>
                                    <input type="radio" id="Mujer" name="genero" value="Mujer" 
                                        onChange={ e => newItem.genero = e.target.value} />
                                    <label for="Mujer">Mujer</label>
                                </div>
                                <div className='input_group'>
                                    <input type="radio" id="Hombre" name="genero" value="Hombre"  
                                        onChange={ e => newItem.genero = e.target.value} />
                                    <label for="Hombre">Hombre</label>
                                </div>
                            </div>

                            <div className='panel_group flex_row'>
                                <label>Posición</label>
                                <div className='input_group'>
                                    <input type="radio" id="Estudiante" name="posicion" value="Estudiante"  
                                        onChange={ e => newItem.posicion = e.target.value } />
                                    <label for="Estudiante">Estudiante</label>
                                </div>
                                <div className='input_group'>
                                    <input type="radio" id="Staff" name="posicion" value="Staff" 
                                        onChange={ e => newItem.posicion = e.target.value } />
                                    <label for="Staff">Staff</label>
                                </div>
                            </div>           

                            <div className='panel_group'>
                                <label>Casa</label>
                                <select onChange={ e => newItem.house = e.target.value} defaultValue='gryffindor'>
                                    <option value="gryffindor">gryffindor</option>
                                    <option value="slytherin">slytherin</option>
                                    <option value="ravenclaw">ravenclaw</option>
                                    <option value="hufflepuff">hufflepuff</option>
                                </select>
                            </div>

                            <div className='panel_group'>
                                <input type="file" name="file" id="file" className="inputfile"  
                                    
                                    onChange={ e => newItem.fotografia = e.target.files[0] } />
                                <label for="file">Fotografía (Selecciona tu archivo)</label>
                            </div>

                        </div>                        

                        <div className='panel_bottom'>
                            <input type="submit" className="button" value="Agregar personaje" />
                        </div>
                    </form>
                </div>
            </div>
        )
    };

export default CharacterAdd;