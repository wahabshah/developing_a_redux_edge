import React, {Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import * as selectors from "../../store/selectors";
import * as actions from "../../store/actions";
import * as style from './style';


class NotesList extends Component{

    render(){ 
         const {notes,openNoteId,addNote,openNote} = this.props;
    return (
       
        <div style={style.wrapper}>
        <button style={style.addNoteButton} onClick={()=>addNote(this.input.value)}>Add Note</button>
        <input ref = {(input)=> this.input = input } style={style.inputNote}  type="text"/>
        {
             (notes.length === 0)
            ? <div style={style.blankslate}>No notes</div>
            : notes.map((note)=>(
                <button key={note.id}  
                        onClick={()=>openNote(note.id)} 
                        style={
                            (notes.id === openNoteId)
                            ? {...style.note,...style.selected}
                            : style.note
                        }
                >{note.content}</button>
            ))

        }
     </div>
    );
     }
};

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            timeStamp: PropTypes.number.isRequired
        })
    ),
    openNoteId: PropTypes.string,
    addNote: PropTypes.func.isRequired,
    openNote:PropTypes.func.isRequired,
}

const MapStateToProps= (state)=> ({
    notes: selectors.getNotes(state),
    openNoteId: selectors.getOpenNoteId(state)
});

export default connect(MapStateToProps,actions)(NotesList);