import tape from "tape";
import {getMockState} from './testUtils';
import * as selectors from './selectors';

tape("selector | getNotes : Return empty array if state contains no notes",({deepEqual,end})=>{
     const state = getMockState.withNoNotes();
     const actualSelection = selectors.getNotes(state);
     const expectedSelection = [];
     deepEqual(actualSelection,expectedSelection);
     end();
})
tape("selector | getNotes :: Return array of note objects if state contains any notes",({deepEqual,end})=>{
    const state = getMockState.withOneNote();
    const actualSelection = selectors.getNotes(state);
    const expectedSelection = [
                               { id:"id-123",content:"Hi",timeStamp:1}
                              ];
    deepEqual(actualSelection,expectedSelection);
    end();
});

tape("selector | getOpenNoteId :: Returns null if state doesnt have open note set",({deepEqual,end})=>{
      const state = getMockState.withNoOpenNotes();
      const actualSelection = selectors.getOpenNoteId(state);
      const expectedSelection  = null;
      deepEqual(actualSelection,expectedSelection);
      end();
})

tape("selector | getOpenNoteId :: Returns note id if state has open note set",({deepEqual,end})=>{
      const state = getMockState.withOneNote();
      const actualSelection = selectors.getOpenNoteId(state);
      const expectedSelection = "id-123";
      deepEqual(actualSelection,expectedSelection);
      end();
});

tape("selector | getNote :: Returns null if state doesnt contain the supplied id",({deepEqual,end})=>{
     const state = getMockState.withOneNote();
     const actualSelection = selectors.getNote(state,"id-789");
     const expectedSelection = null;
     deepEqual(actualSelection,expectedSelection);
     end();
});

tape("selector | getNote :: Returns the note object if state contains note with passed id",({deepEqual,end})=>{
    const state = getMockState.withOneNote();
    const actualSelection = selectors.getNote(state,"id-123");
    const expectedSelection = {
        id:"id-123",
        content:"Hi",
        timeStamp:1
    };
    deepEqual(actualSelection,expectedSelection);
    end();
});