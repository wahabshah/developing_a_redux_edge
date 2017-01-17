import {merge, dissoc} from 'ramda';

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