import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from "../constants/action-types";

export const addNote = text => {
  console.log(text);
  return {
    type: ADD_NOTE,
    text
  }
}

export const updateNote = (id, text) => {
  return {
    type: UPDATE_NOTE,
    id,
    text
  }
}

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    id
  }
}