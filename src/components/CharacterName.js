import './/css/CharacterName.css'

export default function CharacterName(props) {
    return (
        <div className="character_name">
            {props.status} {props.name}
        </div>
    )
};