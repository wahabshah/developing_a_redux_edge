import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as style from './style';

const NoteDetails = ({note,updateNote,closeNote,deleteNote})=>{
    return (
        <div style={style.wrapper}>
    {
        (note !== null)
          ?<div style={style.note}>
           <div style={style.date}>
           {note.timeStamp}
           </div>
           <textarea style={style.textarea} autoFocus key={note.id} type="text" onChange={(event)=>updateNote(event.target.value,note.id)} value={note.content}></textarea>
            <div style={style.row}>
            <button style={{ ...style.button, ...style.danger}} onClick={()=>deleteNote(note.id)}>Remove</button>
            
            <button style={style.button} onClick={()=>{closeNote()}}>Close </button>
            </div>
          </div>
          : <div style={style.blankslate}>No note is open</div>
    }
       </div>
    )
    
}

NoteDetails.propTypes={
    note: PropTypes.shape({
        content: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        timeStamp: PropTypes.number.isRequired
    }),
    updateNote: PropTypes.func.isRequired,
    closeNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
};

const mapStateToProps = (state)=>{
    return{
    note: selectors.getNote(state,selectors.getOpenNoteId(state))
    }
}

export default connect(mapStateToProps,actions)(NoteDetails);