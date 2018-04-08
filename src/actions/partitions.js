
export const types = {
    TEXT: {
        CHANGED: 'TEXT_CHANGED'
    }
}

export const textChanged = (text, notes, activeNote, startTime) => ({
    type: types.TEXT.CHANGED,
    text,
    notes,
    activeNote,
    startTime
})
