import './/css/CharacterData.css'

export default function CharacterData(props) {
    return (
        <div className="character_data">
            <p><strong>Cumpleaños: </strong>{props.birthday}<br/>
            <strong>Género: </strong>{props.gender}<br/>
            <strong>Color de ojos: </strong>{props.eyes_color}<br/>
            <strong>Color de pelo: </strong>{props.hair_color}</p>
        </div>
    )
};