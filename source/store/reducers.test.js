import tape from 'tape';
import * as reducers from './reducers';
import * as actions from './actions';
import {getMockState} from './testUtils';

tape("reducer | byId :: Handle addNote action",({deepEqual, end})=>{
       const stateWithNoNotes = getMockState.withNoNotes();
       const actualState = reducers.byId(stateWithNoNotes.byId,actions.addNote("Hi","id-123",1));
       const expectedNextState = {
           "id-123":{
               id:"id-123",
               content:"Hi",
               timeStamp:1
           }
       }
       deepEqual(actualState,expectedNextState);
       end();
});

tape("reducer | byId :: Handle updateNote action",({deepEqual,end})=>{
      const state = getMockState.withOneNote();
      const actualState = reducers.byId(state.byId,actions.updateNote("Hi!","id-123",2));
      const expectedNextState = {
          "id-123":{
              id:"id-123",
              content:"Hi!",
              timeStamp:2
          }
      }
      deepEqual(actualState,expectedNextState);
      end();
});

tape("reducer | byId :: Handle removeNote action",({deepEqual,end})=>{
         const state = getMockState.withOneNote();
         const actualState = reducers.byId(state.byId, actions.deleteNote("id-123"));
         const expectedNextState = {};
         deepEqual(actualState,expectedNextState);
         end();
});