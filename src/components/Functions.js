export const getFavorites = (characters) => { 
    const favs = characters.filter(character => character.isFavorite)
    return favs;
    };

export const countFavs = (favorites) => {
    return (favorites.length)
    };

export const getLastId = (characters) => {
    const total_chars = characters.length;
    const last_id = characters[total_chars -1].id;
    return last_id + 1;
    };

export const isStudent = (hogwartsStudent) => {
    return hogwartsStudent;
};

export const isStaff = (hogwartsStaff) => {
    // return classType === "Staff";
    return hogwartsStaff;
};

// export const canBePrinted = (classType, toggleStaff, toggleStudents) => {
export const canBePrinted = (hogwartsStudent, hogwartsStaff, toggleStaff, toggleStudents) => {
    return (
        (isStudent(hogwartsStudent) && toggleStudents) || (isStaff(hogwartsStaff) && toggleStaff)
    )
};


export const toggleVar = ( toToggle ) => !toToggle


export const prepFavData = ( itemId, char ) => {
    // console.log('----------');
    // console.log('Functions.js');
    // console.log('itemId -> ', itemId);
    let charData = char;
    // console.log('charData ->', charData);
    // console.log('charData.isFavorite Initial ->', charData.isFavorite);
    charData.isFavorite = toggleVar(charData.isFavorite);
    // console.log('charData.isFavorite End ->', charData.isFavorite);
    // console.log('charData b4 update ->', charData);
    
    return charData
};