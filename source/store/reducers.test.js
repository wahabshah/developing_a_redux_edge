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

tape("reducer | byId :: Handle deleteNote action",({deepEqual,end})=>{
         const state = getMockState.withOneNote();
         const actualState = reducers.byId(state.byId, actions.deleteNote("id-123"));
         const expectedNextState = {};
         deepEqual(actualState,expectedNextState);
         end();
});

tape("reducer | ids :: Handle addNote action",({deepEqual,end})=>{
        const state = getMockState.withNoNotes();
        const actualState = reducers.ids(state.ids,actions.addNote("Hi","id-123",1));
        const expectedNextState = ["id-123"];
        deepEqual(expectedNextState,actualState);
        end();
});

tape("reducer | ids :: Handle removeNote action",({deepEqual,end})=>{
        const state = getMockState.withOneNote();
        const actualState  = reducers.ids(state.ids,actions.deleteNote("id-123"));
        const expectedNextState = [];
        deepEqual(actualState, expectedNextState);
        end();
});

tape("reducer | openNoteId :: Handle openNoteId action",({deepEqual,end})=>{
       const state = getMockState.withNoOpenNotes();
       const actualState = reducers.openNoteId(state.openNoteId,actions.openNote("id-123"));
       const expectedNextState  = "id-123";
       deepEqual(actualState,expectedNextState);
       end();
});

tape("reducer | openNoteId :: Handle closeNoteId action",({deepEqual,end})=>{
        const state  = getMockState.withOneNote();
        const actualState = reducers.openNoteId(state.openNoteId, actions.closeNote());
        const expectedNextState = null;
        deepEqual(actualState,expectedNextState);
        end();
})

tape("reducer | openNoteId :: Handle addNote action",({deepEqual,end})=>{
       const state = getMockState.withNoNotes();
       const actualState = reducers.openNoteId(state.openNoteId,actions.addNote("Hi","id-123",1));
       const expectedNextState = "id-123";
       deepEqual(actualState,expectedNextState);
       end();
});

tape("reducer | openNoteId :: Handle deleteNote action",({deepEqual,end})=>{
       const state = getMockState.withOneNote();
       const actualState = reducers.openNoteId(state.openNoteId,actions.deleteNote("id-123"));
       const expectedNextState = null;
       deepEqual(actualState,expectedNextState);
       end();
})
