
const initialState = {
    inputText: "",
    notes: [],
    activeNote: 0,
    startTime: 0,
    endTime: 0,
    speed: 0,
}
export const partitions = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NOTES':
        return {
          ...state,
          activeNote: 0,
          notes: action.notes,
          startTime: action.time
        }
      case 'UPDATE_ACTIVE':
        return {
          ...state,
          activeNote: action.newActiveNote,
        }
      case 'UPDATE_TEXT':
        return {
          ...state,
          inputText: action.message,
        }
      case 'UPDATE_SPEED':
      return {
        ...state,
        speed: action.speed,
      }
      default:
        return state
    }
  }