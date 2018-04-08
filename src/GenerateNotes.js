
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const notesNames = ["sol", "fa", "mi", "ré", "do", "si", "la", "sol", "fa", "mi"];
export const numberNotes = 20;

const generateNotes = (length) => {
    let notes = [];
    for(var i = 0; i < length; i++) {
        notes.push(getRandomInt(0, 9));
    }
    return notes;
}

export default generateNotes;