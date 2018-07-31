import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../constants/action-types";

const initialState =[


];

function notes(state=initialState,action){
    console.log("inside reducer");

    // Getting a shallow copy of the state
    let noteList = state.slice();
    console.log(action.type);
    switch (action.type){

        case ADD_NOTE:
            console.log("store");
            return [...state,{text: action.text}];

        case UPDATE_NOTE:

            let noteToUpdate = noteList[action.id];
            noteToUpdate.text = action.text;
            noteList.splice(action.id,1,noteToUpdate);

            return noteList;

        case DELETE_NOTE:

             noteList.splice(action.id,1);
             return noteList;

        default:
            return state;

    }
}

export default notes;
