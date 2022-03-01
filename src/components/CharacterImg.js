import './/css/CharacterImg.css'

export const CharacterImg = ( { imgsrc, house } ) => {
    return (
        <div className={`card_identity ${ house.toLowerCase() }`}>
            { /* <img className="card_picture" alt="card_picture" src={`/imgs/${imgsrc}`}></img> */ }
            <img className="card_picture" alt="card_picture" src={`${imgsrc}`}></img>
        </div>
    )
};

export default CharacterImg;