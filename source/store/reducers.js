import {combineReducers } from 'redux';
import {merge, dissoc,append,without} from 'ramda';

export const byId = (state={}, action) =>{
        switch (action.type)
        {
           case "app/addNote":
           case "app/updateNote":
           return merge(state,
                        {[action.payload.id]:action.payload});
            case "app/deleteNote":
            return dissoc(action.payload.id,state);
             default:
             return state;
        }
}

export const ids  = (state=[],action)=>{
      switch(action.type){
          case "app/addNote":
            return append(action.payload.id,state);
         case "app/deleteNote":
            return without(action.payload.id,state);
          default:
            return state;
      }
}

export const openNoteId = (state="",action) =>{
        switch(action.type){
            case "app/openNote":
            case "app/addNote":
              return action.payload.id;
            case "app/closeNote":
            case "app/deleteNote":
              return null;
            default:
              return state;
        }
}

export default combineReducers({
    byId,
    ids,
    openNoteId
})