
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const notesNames = ["o2", "f2", "m2", "r2", "d2", "s1", "l1", "o1", "f1", "m1"];
export const numberNotes = 20;

const generateNotes = (length) => {
    let notes = [];
    for(var i = 0; i < length; i++) {
        notes.push(getRandomInt(0, 9));
    }
    return notes;
}

export default generateNotes;
