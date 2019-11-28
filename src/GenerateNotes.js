
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const hedwigs = ["s1", "m2", "o2", "f2#", "m2", "s2", "l2", "f2#", "m2", "o2", "f2#", "r2#", "f2", "s1"];

export const notesNames = ["d1", "r1b", "r1", "m1b", "m1", "f1", "o1b", "o1", "l1b", "l1", "s1b", "s1", "d2","r2b","r2","m2b","m2","f2","o2b","o2","l2b","l2","s2b","s2"];
// export const notesNames = ["m1", "f1", "o1b", "o1", "l1b", "l1", "s1b", "s1", "d2","r2b","r2","m2b","m2","f2","o2b","o2","l2b","l2","s2b","s2"];
export const zeroNote = "o2";
export const lines = notesNames.filter(x => !x.endsWith("b"));
export const zeroNoteIndex = lines.findIndex(x => x === zeroNote);
export const numberNotes = 20;
export const notePos = note => {
    const noteText = notesNames[note.note];
    const baseNote = noteText.substring(0, 2);
    const x = lines.findIndex(x => x === baseNote);
    let row = zeroNoteIndex - x;
    let bemol = noteText.endsWith("b");
    let diese = false;
    if (bemol && !note.asBemol) {
        bemol = false;
        diese = true;
        row++;
    }
    return {row: row, bemol: bemol, diese: diese};
};

const buildPartition = (notes) => {
    return notes.map(note => {
        let bemol = true;
        if (note.endsWith("#")) {
            note = lines[lines.findIndex(x => x === note.substring(0, 2))+1] + "b";
            bemol = false;
        }
        return {
            note: notesNames.findIndex(x => x === note),
            asBemol: bemol,
        }
    })
};

const generateNotes = (length) => {
    // return buildPartition(hedwigs);
    let notes = [];
    for(let i = 0; i < length; i++) {
        notes.push({
            note: getRandomInt(0, notesNames.length - 1),
            asBemol: getRandomInt(0, 1) === 0,
        });
    }
    return notes;
};

export default generateNotes;
