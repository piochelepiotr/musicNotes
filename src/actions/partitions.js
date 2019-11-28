
export const types = {
    TEXT: {
        CHANGED: 'TEXT_CHANGED'
    },
    KEYBOARD: {
        CHANGE: 'CHANGE_KEYBOARD'
    }
}

export const textChanged = (text, notes, activeNote, startTime) => ({
    type: types.TEXT.CHANGED,
    text,
    notes,
    activeNote,
    startTime
});

export const changeKeyboard = () => ({
    type: types.KEYBOARD.CHANGE,
});
