import React from 'react';
import NotesList from "../NotesList";
import NoteDetails from '../NoteDetails';
import DevTools from '../../store/devtools';
import {connect} from 'react-redux';
import * as style from './style';

const App = ()=>{
    return (
        <div style={style.wrapper}>
          <NotesList/>
          <NoteDetails/>
          <DevTools />
        </div>
    );
}

export default App;