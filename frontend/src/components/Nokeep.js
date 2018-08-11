import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addNote, updateNote, deleteNote} from "../actions/index";


class Nokeep extends Component {

        constructor(){

            super();

            this.state ={
                text: "",
                updateNoteId: null,

            };

            this.resetForm  = this.resetForm.bind(this);
            this.selectForEdit = this.selectForEdit.bind(this);
            this.submitNote = this.submitNote.bind(this);
            this.handleChange = this.handleChange.bind(this);


        }


        resetForm(){
          this.setState({text: "", updateNoteId: null});
        }

        selectForEdit(id){
          let note = this.props.notes[id];
          this.setState({text: note.text, updateNoteId: id});
        }

        handleChange(event){
//            console.log(event.target.value)
            this.setState({text: event.target.value})
//            console.log(this.state.text);
        }

        submitNote(event){
          event.preventDefault();
          if (this.state.updateNoteId === null) {

            this.props.addNote(this.state.text);
          } else {
            this.props.updateNote(this.state.updateNoteId, this.state.text);
          }
          this.resetForm();
        }

    render(){

        const { text } = this.state;

        return(

            <div>
        <h2>Welcome to NoKeep!</h2>
        <hr />

        <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
        <h3>Add new note</h3>
        <form onSubmit={this.submitNote}>
        <div className="form-group">
        <input
            value={text}
            className="form-control"
            placeholder="Enter note here..."
            onChange={ this.handleChange }
            required />
            </div>
           <button onClick={this.resetForm} className="btn btn-success">Reset</button>

          <input type="submit" value="Save Note" className="btn btn-success" />

        </form>
         </div>

        <div className="col-md-4 offset-md-1">
        <h3>Notes</h3>
        <table className="table">
          <tbody>
            {this.props.notes.map((note, id) => (
              <tr key={`note_${id}`}>
                <td>{note.text}</td>
                <td><button onClick={() => this.selectForEdit(id)} className="btn btn-success">edit</button></td>
                <td><button onClick={() => this.props.deleteNote(id)} className="btn btn-success">delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
      </div>


        );
    }

}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {

    addNote: (text) => {
        dispatch(addNote(text));
    },

    updateNote: (id,text) => {
         dispatch(updateNote(id,text));
    },

    deleteNote: (id) => {
         console.log(id);
         dispatch(deleteNote(id));
    },

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nokeep);
